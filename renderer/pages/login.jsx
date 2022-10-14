import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { login } from '../components/server-components.js';


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

  const handleLogin = async (e) => {
    // console.log('login');
    e.preventDefault();
    // validate the form
    if (email && password) {
      const resp = await login(email, password);
      console.log("response1221 " + resp);
    }
  };

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

