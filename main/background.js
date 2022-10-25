import { app, dialog, ipcMain, net } from 'electron';
import serve from 'electron-serve';
import { checkifEmpty } from '../renderer/components/db-components';
import { createWindow } from './helpers';
const { autoUpdater } = require('electron-updater');
const storageAct = require('./helpers/storageActivities.js');


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
    webPreferences: {
      // devTools: false
    }
  });
  const empty = storageAct.checkifEmpty();
  if (isProd) {

    if (empty) {
      await mainWindow.loadURL('app://./get_started.html');
    } else {
      await mainWindow.loadURL('app://./dashboard.html');
    }
  } else {
    const port = process.argv[2];
    if (empty) {
      await mainWindow.loadURL(`http://localhost:${port}/get_started`);
    } else {
      await mainWindow.loadURL(`http://localhost:${port}/dashboard`);
    }
    mainWindow.webContents.openDevTools();

  }
  //init db table 
  storageAct.createBotTable();
})();

app.on('window-all-closed', () => {
  app.quit();
});

autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Ok'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version is being downloaded.'
  }
  dialog.showMessageBox(dialogOpts, (response) => {

  });
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  };
  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
});

ipcMain.handle('app_version', (event) => {
  return app.getVersion();
});

ipcMain.handle('DBgetAllBots', (event) => {
  return storageAct.getAllBots();
});
ipcMain.handle('DBaddBot', (event, args) => {
  return storageAct.addBot(args.bot);
});
ipcMain.handle('DBsetUserName', (event, args) => {
  return storageAct.setUserName(args.name);
});

ipcMain.handle('DBgetUserName', (event) => {
  return storageAct.getUserName();
});

ipcMain.handle('DBdeleteBot', (event, args) => {
  return storageAct.deleteBot(args.id);
});

ipcMain.handle('DBupdateBot', (event, args) => {
  return storageAct.updateBot(args.bot);
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.handle("login", (obj, data) => {
  try {
    console.log("Inside the login function 2");
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
      body: JSON.stringify({
        data
      })

    })
    //TODO:solve the problem of 400 
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


});
