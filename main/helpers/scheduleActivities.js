const schedule = require('node-schedule');
const storageAct = require('./storageActivities.js');

export async function setSchedule(bot_id, cronObj) {
    try {
        console.log(cronObj);
        storageAct.saveScheduleToDB(bot_id, cronObj.cronString);
        schedule.scheduleJob(bot_id, cronObj.cronString, function () {
            console.log("This ran at" + new Date().toISOString() + " for bot id " + bot_id);

        })
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function loadSchedule(bot_id, cronString) {
    console.log(cronString);
    schedule.scheduleJob(bot_id, cronString, function () {
        console.log("This ran at" + new Date().toISOString() + " for bot " + bot_id);

    })
}

export async function removeSchedule(bot_id) {
    try {
        var x = schedule.cancelJob(bot_id);
        storageAct.removeScheduleFromDB(bot_id);
        console.log("Schedule cancelled for " + bot_id + x);
        return x;
    } catch (err) {
        console.log(err);
        return false;
    }

}

export async function loadAllSchedules() {
    var allCrons = await storageAct.getAllCrons();
    console.log(allCrons);
    allCrons.forEach(cronObj => {
        loadSchedule(cronObj.id, cronObj.cron);
    });
}




//cron syntax
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )
