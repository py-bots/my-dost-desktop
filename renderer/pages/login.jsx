import electron from 'electron';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

const ipcRenderer = electron.ipcRenderer || false;

function LoginForm(handleLogin, setEmail, setPassword) {
  return <form className='mt-1 w-full flex-wrap flex justify-center' onSubmit={handleLogin}>
    <input

      type='email'
      name='email'
      placeholder='Email'
      className='input'
      onChange={(e) => setEmail(e.target.value)}
      validate />
    <input
      type='password'
      name='password'
      placeholder='Password'
      className='input'
      onChange={(e) => setPassword(e.target.value)} />
    <button
      type='submit'
      className='btn-blue'
    >
      Login
    </button>
  </form>;
}

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    console.log('login');
    e.preventDefault();
    // validate the form
    if (email && password) {
      ipcRenderer.send('login', {'email': email, 'password': password});
    }
  };

  useEffect(() => {
    ipcRenderer.on('login', (event, arg) => {
      console.log(arg);
    });
    return () => {
      ipcRenderer.removeAllListeners('login');
      
    }
  }, []);


  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
    
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
        <Link href='/editor'>
          <a className='btn-blue'>Go to Editor</a>
        </Link>
      </div>
      {LoginForm(handleLogin, setEmail, setPassword)}
    </React.Fragment>
  );
}

export default Login;


