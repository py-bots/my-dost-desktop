import electron from 'electron';


const ipcRenderer = electron.ipcRenderer || false;


export async function setSchedule(Bot, cronObj) {
    try {
        console.log("inside set schedule component")
        var res = await ipcRenderer.invoke("set-schedule", { bot:Bot, cronObj: cronObj });
        return res;
    }
    catch (error) {
        // console.log("error occured " + error);
    }

}

export async function removeSchedule(bot) {
    try {
        var res = await ipcRenderer.invoke("remove-schedule", {bot:bot});
        return res;
    }
    catch (error) {
        // console.log("error occured " + error);
    }

}