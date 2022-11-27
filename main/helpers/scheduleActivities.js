const schedule = require('node-schedule');


export async function setSchedule(bot, cronObj)
{
    console.log(cronObj.cronString); 
    schedule.scheduleJob(bot.id ,cronObj.cronString, function()
    {
        console.log("This ran at" + new Date().toISOString());

    })
    console.log("Schedule set for " + bot.name);

    // var x  =  schedule.cancelJob(bot.id);
    // console.log("Schedule cancelled for " + bot.name + x );
    // var y  =  schedule.cancelJob(bot.id);
    // console.log("Schedule cancelled for " + bot.name + y );


}
export async function removeSchedukle(bot)
{
    var x = schedule.cancelJob(bot.id);
    console.log("Schedule cancelled for " + bot.name + x);
}






// class ScheduleJob {
//     constructor(path_to_file, cronObj) {
//         this.path_to_file = path_to_file;
//         this.cronObj = cronObj;
//         this.job = null; 
//     }

//     changeTime(cronObj) {
//         this.cronObj = cronObj;
//         this.job.reschedule(cronObj.toUsable());
//     }

//     scheduleActivate()
//     {
//         this.job =  schedule.scheduleJob(this.path_to_file);  

//     }
//     scheduleDeactivate()
//     {
     
//     }
//     deschedule()
//     {
//         this.job.cancel(); 
//     }
    

// }; 


//cron syntax
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )
