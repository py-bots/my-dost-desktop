
//move this file into static later and do proper connections
const {contextBridge  ,ipcRenderer} = require('electron'); 

let indexBridge = {
    login : async (email, password) => 
    {
        console.log("Inside the login function 0.5 ") ;
        var result = await ipcRenderer.invoke('login', email , password);
    }
} 

contextBridge.exposeInMainWorld('indexBridge', indexBridge);