import { app, dialog, ipcMain, Tray ,Menu, nativeImage} from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
const { autoUpdater } = require('electron-updater');
const storageAct = require('./helpers/storageActivities.js');
import { PythonShell } from 'python-shell';
const path = require('path');
var  isWindowOpen = false; 
const isProd = process.env.NODE_ENV === 'production';
let mainWindow
if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

let tray = null
function createTray () {
  console.log(__dirname+'//images//logo.png'); 
  const icon = path.join(__dirname, '/../resources/icon.ico') // required.
  const trayicon = nativeImage.createFromPath(icon) ; 
  tray = new Tray(trayicon.resize({ width: 16 })) 
  ;
  tray.setToolTip('My Dost Application')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: async ()  =>  {
        if (isWindowOpen) {
          return ; 
        }

         mainWindow = createWindow('main', {
          width: 800,
          height: 600,
        });
        console.log(mainWindow);
        mainWindow.removeMenu();
        isWindowOpen = true; 
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
    //mainWindow.webContents.openDevTools();
  }
  //init db table 
  
  storageAct.createBotTable();
      }
    },
    {type: "separator"},
    {
      label: 'Quit',
      click: () => {
        app.quit() // actually quit the app.
      }
    },
  ])

  tray.setContextMenu(contextMenu)
}
(async () => {
  await app.whenReady();
  mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      devTools: isProd ? false : true,
    }
  });
  if (!tray) { // if tray hasn't been created already.
    createTray()
  }
  mainWindow.removeMenu();
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
   // mainWindow.webContents.openDevTools();
  }
  //init db table 
  
  storageAct.createBotTable();
})();


app.on('window-all-closed', (event) => {
  //console.log('close12')
  isWindowOpen = false; 
  event.preventDefault();
  // mainWindow.hide();  // hide the app.
  //for mac Os it is app.dock.hide()
});


app.on('window-close', (event) => {
  console.log('close')
  event.preventDefault();
  // mainWindow.hide();  // hide the app.
  //for mac Os it is app.dock.hide()
});

autoUpdater.on("update-available", async (_event, releaseNotes, releaseName) => {

  const dialogOpts = {
    type: 'info',
    buttons: ['Ok'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version is being downloaded.'
  }
  dialog.showMessageBox(dialogOpts, (response) => {
    //console.log(response);
  });
})


autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  //console.log(log_message);
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
      var pre_def_path = path.join(app.getPath('home'), '..', 'Public', 'PyBOTs LLC', 'DOST', 'support', 'python.exe');
      var pyPath = args.pythonPath && args.pythonPath != '' ? args.pythonPath : pre_def_path;
      let options =
      {
        mode: 'text',
        pythonPath: pyPath,
      };
      //console.log("path is " + path);
      PythonShell.runString(args.codeString, options, function (err, results) {
        if (err) throw err;
        resolve(results);
      });
    } catch (error) {
      //console.log("error occured " + error);
      reject(error);
    }
  }
  )
  return run.then((result) => {
    //console.log(result);
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
