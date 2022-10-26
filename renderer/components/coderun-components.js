import electron from 'electron';


const ipcRenderer = electron.ipcRenderer || false;


export async function runCodeString(codeString) {
    try {
        var res = await ipcRenderer.invoke("runScript", { codeString });
        console.log("res runCodeString" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }

}

export async function isProduction() {
    try {
        var res = await ipcRenderer.invoke("isProduction");
        console.log("res isProduction" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }

}