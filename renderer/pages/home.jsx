import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { version_info } from '../components/server-components.js';
import { useEffect } from 'react';
import { ipcRenderer } from 'electron';


//TODO: create react component instead of using inplace HTML, create new version and test auto updater
function notificationWindow() {
  var [hiddenWindow, SetHiddenWindow] = React.useState(true);
  var [notiftext, setNotifText] = React.useState('');
  var [hiddenButton, setHiddenButton] = React.useState(true);

  useEffect(() => {
    ipcRenderer.on('update_available', () => {
      SetHiddenWindow(false);
      setNotifText('A new update is available. Downloading now...');

      return () => {
        ipcRenderer.removeAllListeners('update_available');
      }
    });

    ipcRenderer.on('update_downloaded', () => {
      ipcRenderer.removeAllListeners('update_downloaded');
      setNotifText('Update Downloaded. It will be installed on restart. Restart now?');
      setHiddenButton(false);
      SetHiddenWindow(false);
      // message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
      // restartButton.classList.remove('hidden');
      // notification.classList.remove('hidden');

      return () => {
        ipcRenderer.removeAllListeners('update_available');
      }
    });
  }, []);

  return (
    <div id="notification" className="notifwindow" hidden={hiddenWindow}>
      <p  {...notiftext} ></p>
      <button id="close-button" onClick={() => SetHiddenWindow = true}>
        Close
      </button>
      <button id="restart-button" onClick={() => ipcRenderer.send('restart_app')} className="notifwindow" hidden={hiddenButton}>
        Restart
      </button>
    </div>

  )
}


function getVersion() {
  const [version, setVersion] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    console.log('useEffect');
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


  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-tailwindcss)</title>
      </Head>
      {notificationWindow()}
      <p id="version"></p>

      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+++***</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/get_started'>
          <a className='btn-blue'>Get Started</a>
        </Link>
        <Link href='/editor'>
          <a className='btn-blue'>Go to Editor</a>
        </Link>
        <Link href='/login'>
          <a className='btn-blue'>Go to Login</a>
        </Link>
        <Link href='/botview'>
          <a className='btn-blue'>Go to Bot View</a>
        </Link>
      </div>

      {getVersion()}
    </React.Fragment>
  );
}

export default Home;
