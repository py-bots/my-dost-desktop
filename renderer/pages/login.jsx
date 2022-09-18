import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import login from '../components/server-components.js';
// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {email: '', password:''};
     
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
//     handleChange(name,value) {
 
//         this.setState({...this.state, [name]: value.target.value});

       
//     }
//     async handleSubmit(event) {
//         console.log('Email : ' + this.state.email +  " Password :  " +  this.state.password);
//         await login(this.state.email, this.state.password);
        
//     }

    
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Email:
//           <input type="text" value={this.state.email} onChange={this.handleChange.bind(this,'email')} placeholder = "email"/>
//         </label>
//         <label>
//           Password:
//           <input  value={this.state.password} onChange={this.handleChange.bind(this,'password')} type="password" placeholder = "password" label = "password"  />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
import { useEffect } from 'react';

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

  const  handleLogin = async (e) =>  {
    // console.log('login');
     e.preventDefault();
    // validate the form
    if (email && password) {
    const resp =  await login(email, password);
    console.log("response1221 "+ resp)
    }
  };

  // useEffect(() => {
  //   ipcRenderer.on('login', (event, arg) => {
  //     console.log(arg);
  //   });
  //   return () => {
  //     ipcRenderer.removeAllListeners('login');
      
  //   }
  // }, []);
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

