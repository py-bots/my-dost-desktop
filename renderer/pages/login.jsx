import electron from 'electron';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ipcRenderer = electron.ipcRenderer || false;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(name, value) {

    this.setState({ ...this.state, [name]: value.target.value });


  }
  async handleSubmit(event) {
    console.log('Email : ' + this.state.email + " Password :  " + this.state.password);
    event.preventDefault();
    ipcRenderer.send('login', { email: this.state.email, password: this.state.password });
    ipcRenderer.on('login-success', (event, arg) => {
      console.log(arg);
      console.log('login success');
    });

    ipcRenderer.on('login-error', (event, arg) => {
      console.log(arg);
      console.log('login error');
    });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="email" />
        </label>
        <label>
          Password:
          <input value={this.state.password} onChange={this.handleChange.bind(this, 'password')} type="password" placeholder="password" label="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



function Login() {
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm></LoginForm>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
        <Link href='/editor'>
          <a className='btn-blue'>Go to Editor</a>
        </Link>

      </div>
    </React.Fragment>
  );
}

export default Login;
