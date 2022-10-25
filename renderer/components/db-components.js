import electron from 'electron';


const ipcRenderer = electron.ipcRenderer || false;
export async function getAllBots() {
    try {
        var res = await ipcRenderer.invoke("DBgetAllBots");
        console.log("res getAllBots" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
};

export async function addBot(bot) {
    try {
        var res = await ipcRenderer.invoke("DBaddBot", { bot });
        console.log("res addBot" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}

export async function setUserName(name) {
    try {
        var res = await ipcRenderer.invoke("DBsetUserName", { name });
        console.log("res setUserName" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}

export async function getUserName() {
    try {
        var res = await ipcRenderer.invoke("DBgetUserName");
        console.log("res getUserName" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}

export async function deleteDBBot(id) {
    try {
        var res = await ipcRenderer.invoke("DBdeleteBot", { id });
        console.log("res deleteBot" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}

export async function updateDBBot(bot) {
    try {
        console.log("updateDBBot");
        var res = await ipcRenderer.invoke("DBupdateBot",  bot );
        console.log("res updateBot" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}

export async function checkifEmpty() {
    try {
        var res = await ipcRenderer.invoke("DBcheckifEmpty");
        console.log("res checkifEmpty" + res);
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
        return false;
    }
}

export async function customDialog(title, message, defaultValue) {
    try {
        var res = await ipcRenderer.invoke("customDialog", { title, message, defaultValue });
        return res;
    }
    catch (error) {
        console.log("error occured " + error);
    }
}


