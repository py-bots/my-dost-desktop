import electron from 'electron';

const ipcRenderer = electron.ipcRenderer || false;
export async function login(email, password) {
    try{
     var res =  await ipcRenderer.invoke("login" , {email , password}) ;
     return res; 
    }
    catch(error){
        //console.log("error occured " + error);
    }
};

 export async function version_info() {
    try{
     var res =  await ipcRenderer.invoke("app_version") ;
     //console.log("res" + res);
     return res; 
    }
    catch(error){
        //console.log("error occured " + error);
    }
}
