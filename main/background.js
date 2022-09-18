
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

ipcMain.handle("login" , (obj ,data) => {
    try {
      console.log("Inside the login function 2") ; 
      console.log(data);
      console.log(JSON.stringify(data))
      
          const request = net.request({
              method: 'POST',
              protocol: 'https:',
              hostname: 'api.pybots.ai',
              path: '/auth/login/',
              headers: {
                  'Content-Type': 'application/json'
              },
               body:  JSON.stringify({
                   data
              })
              
          })
          //solve the problem of 400 
          request.on('response', (response) => {
              console.log(`STATUS: ${response.statusCode}`)
              console.log(`HEADERS: ${response.headers}`)
              response.on('data', (chunk) => {
                  console.log(`BODY: ${chunk}`)
              })
              response.on('end', () => {
                  console.log('No more data in response.')
              })
          });
          request.end();
          return "success from login function";
      
          
      } catch (error) {
          console.log("error occured" + error);
      }

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
