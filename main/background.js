
import { app, ipcMain , net } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();
  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
    
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.on('login', (event, arg) => {
  const email = arg.email;
  const password = arg.password;
  console.log('Email : ',email, 'Pass', password, 'background.js');

  // if email and password are correct
  if (email ==='mmv@gmail.com' && password === 'murali') {
    event.reply('login', {status: true, message: 'Login Success'});
    console.log('Login Success, backgroud.js');
  } else {
    event.reply('login', {status: false, message: 'Login Failed'});
    console.log('Login Failed, backgroud.js');
  }
  // else
  // event.reply('login-reply', 'error');

  // const url = 'https://api.example.com/login';
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  // };
  // const request = net.request(url);
  // request.on('response', (response) => {
  //   response.on('data', (chunk) => {
  //     event.sender.send('login-response', chunk.toString());
  //   });
  // }
  // );
  // request.write(JSON.stringify(options.body));
  // request.end();
});
