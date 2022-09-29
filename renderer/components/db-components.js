import electron from 'electron';


const ipcRenderer = electron.ipcRenderer || false;
export async function getAllBots() {
    try{
     var res =  await ipcRenderer.invoke("DBgetAllBots") ;
     console.log("res getAllBots" + res);
     return res; 
    }
    catch(error){
        console.log("error occured " + error);
    }
};

export async function addBot(bot){
    try{
        var res = await ipcRenderer.invoke("DBaddBot" , {bot});
        console.log("res addBot" + res);
        return res;
    }
    catch(error){
        console.log("error occured " + error);
    }
}
