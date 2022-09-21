import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {version_info} from '../components/server-components.js';
import { useEffect } from 'react';
import { ipcRenderer } from 'electron/renderer';
function closeNotification() {
  document.getElementById('notification').classList.add('hidden');
}
function restartApp() {
  ipcRenderer.send('restart_app');
}

 function getVersion()  
{
  const [version, setVersion] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    version_info().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setVersion(data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Version</h1>
      <p>{version}</p>
      <p>{error}</p>
    </div>
  );
}

function Home() {
  const notification = document.getElementById('notification');
  const message = document.getElementById('message');
  const restartButton = document.getElementById('restart-button');
  useEffect(() => {
    ipcRenderer.on('update_available', () => {
      
      message.innerText = 'A new update is available. Downloading now...';
      notification.classList.remove('hidden');
      return() => 
      {
        ipcRenderer.removeAllListeners('update_available');
      }
    });

    ipcRenderer.on('update_downloaded', () => {
      ipcRenderer.removeAllListeners('update_downloaded');
      message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
      restartButton.classList.remove('hidden');
      notification.classList.remove('hidden');

      return() =>
      {
        ipcRenderer.removeAllListeners('update_available');
      }
    });
   }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-tailwindcss)</title>
      </Head>

      <p id="version"></p>
 
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
        <Link href='/editor'>
          <a className='btn-blue'>Go to Editor</a>
        </Link>
        <Link href='/login'>
          <a className='btn-blue'>Go to Login</a>
        </Link>

      </div>
      <div id="notification" className="hidden">
  <p id="message"></p>
  <button id="close-button" onClick="closeNotification()">
    Close
  </button>
  <button id="restart-button" onClick="restartApp()" className="hidden">
    Restart
  </button>
</div>
      {getVersion()}
    </React.Fragment>
  );
}

export default Home;
