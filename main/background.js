import { app, dialog, ipcMain, net } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
const { autoUpdater } = require('electron-updater');
const storageAct = require('./helpers/storageActivities.js');
import { PythonShell } from 'python-shell';

const isProd = process.env.NODE_ENV === 'production';
let mainWindow
if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}


(async () => {
  await app.whenReady();
   mainWindow = createWindow('main', {
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

autoUpdater.on("update-available", async (_event, releaseNotes, releaseName) => {
  if(isProd)
  {
    window.location.href = 'app://./update.html';
  }
  
  const dialogOpts = {
    type: 'info',
    buttons: ['Ok'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version is being downloaded.'
  }
  dialog.showMessageBox(dialogOpts, (response) => {
    console.log(response);
  });
})


autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  console.log(log_message);
  mainWindow.webContents.send('download-progress', log_message);
  //send the log nessage 
  
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
  return storageAct.updateBot(args);
});

ipcMain.handle('isProduction', (event) => {
  return isProd;
});


ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});


ipcMain.handle('runScript', (event, args) => {
  var run = new Promise((resolve, reject) => {
    try {
      var path = args.pythonPath && args.pythonPath != '' ? args.pythonPath : 'C:\\Users\\Public\\PyBots\\My-AutoPylot\\support\\python.exe';
      let options =
      {
        mode: 'text',
        pythonPath: path,
      };
      console.log("path is " + path);
      PythonShell.runString(args.codeString, options, function (err, results) {
        if (err) throw err;
        resolve(results);
      });
    } catch (error) {
      console.log("error occured " + error);
      reject(error);
    }
  }
  )
  return run.then((result) => {
    console.log(result);
    return result;
  }
  ).catch((error) => {
    return error;
  }
  )
});



ipcMain.handle('get-python-path', (event) => {
  // show open dialog
  const options = {
    title: 'Select Python Path',
    properties: ['openFile'],
    filters: [
      { name: 'Python', extensions: ['exe'] }
    ]
  }
  return dialog.showOpenDialog(options).then((result) => {
    if (!result.canceled) {
      return result.filePaths[0];
    }
  }
  );



});
