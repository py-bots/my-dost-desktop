class Cron{
    constructor(time,Days,isDaily = false) {
       this.time = time;
       console.log(time) ;
       this.Days = Days; //days array 
       this.isDaily = isDaily;
       this.cronString = "" ; 
    }
    toUsable()
    {

        if(this.isDaily)
        {
            let time = this.time.split(":");
            let minute = time[1];
            let hour = time[0];
            this.cronString = `${minute} ${hour} * * *`;
            console.log(this.cronString); 
            return this.cronString; 
        }
        let time = this.time.split(":");
        let dayString = ""; 
        for(let i = 0 ; i < this.Days.length ; i++)
        {   
            if(this.Days[i] == 1)
            {
                if(i == this.Days.length - 1)
                dayString += i ;
                else
                dayString += i + ",";
            }
            
     
        }
        let minute = time[1];
        let hour = time[0];

        let cronString = `${minute} ${hour} * * ${dayString}`;
        console.log(cronString);
        this.cronString = cronString; 
        return cronString;
    }

} ; 

module.exports  = Cron ; 