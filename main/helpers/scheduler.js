const schedule = require('node-schedule');


class ScheduleJob {
    constructor(path_to_file, time , running_days) {
        this.path_to_file = path_to_file;
        this.time = time;
        this.running_days = running_days;
        this.job = null; 
    }

    changeTime(time) {
        this.time = time;
        this.job.reschedule(time);
    }

    change_version(version) {
        this.version = version;
    }

    scheduleActivate()
    {


    }
    scheduleDeactivate()
    {
       this.job =  schedule.scheduleJob(this.path_to_file+this.version);  
    }
    deschedule()
    {
        this.job.cancel(); 
    }
    

}; 

//cron syntax
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )
