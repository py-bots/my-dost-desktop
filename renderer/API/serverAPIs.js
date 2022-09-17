import electron from 'electron';

const ipcRenderer = electron.ipcRenderer || false;
export default async function login(email, password) {
    try{
     var res =  await ipcRenderer.invoke("login" , email , password) ;
    }
    catch(error){
        console.log("error occured " + error);
    }
};
