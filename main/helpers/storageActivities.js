var dbmgr = require('./dbInit.js');
var db = dbmgr.db;
const Bot = require('../models/bot_model.js').default;


exports.createBotTable = () => {
    //single time use for dev purposes
    // const sqql = "Drop table Schedule"; 
    // let stmtt = db.prepare(sqql);
    // let info = stmtt.run();
    const sql = "CREATE TABLE IF NOT EXISTS bots (id TEXT PRIMARY KEY , name TEXT, timeStamp TEXT , description TEXT, code TEXT, workspace TEXT , py_file_path TEXT , isScheduled BOOLEAN)";
    const sqlsecond = "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY , name VARCHAR(45) NOT NULL)";
    const sqlthird = "CREATE TABLE IF NOT EXISTS Schedule (id TEXT PRIMARY KEY , cron VARCHAR(45) NOT NULL)";
    let stmt = db.prepare(sql);
    let stmt2 = db.prepare(sqlsecond);
    let stmt3 = db.prepare(sqlthird);
    stmt.run();
    stmt2.run();
    stmt3.run();
}

exports.checkifEmpty = () => {

    const sql = "select * from SQLITE_SCHEMA";
    let stmt = db.prepare(sql);
    let result = stmt.all();
    //console.log(result); 
    if (result.length == 0) {
        return true;
    } else {
        return false;
    }
}



exports.getAllBots = () => {
    const sql = "SELECT * FROM bots";
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}
/**
 * @param {Bot} bot The bot
 */
exports.addBot = (bot) => {
    console.log(bot);
    const sql = `INSERT INTO bots (id, name, timeStamp ,description,code,workspace,isScheduled,py_file_path ) VALUES (?,?,?,?,?,?,?,?)`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.id, bot.name, bot.timeStamp, bot.description, bot.code, bot.workspace,bot.isScheduled?1:0,bot.py_file_path);
    //console.log(info);
    return true;
}

exports.setUserName = (name) => {
    const sql = `INSERT INTO user (name) VALUES (?)`;
    let stmt = db.prepare(sql);
    let info = stmt.run(name);
    //console.log(info);
    return true;
}

exports.getUserName = () => {
    const sql = `SELECT name FROM user where id = (select max(id) from user) `;
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}

exports.deleteBot = (id) => {
    //console.log(id)
    const sql = `DELETE FROM bots WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(id);
    //console.log(info);
    return true;
}

exports.updateBot = (bot) => {
    console.log("Code recieved : " + bot.code ); 
    const sql = `UPDATE bots SET name = ? , timeStamp = ? , description = ? , code = ? , workspace = ?, isScheduled = ?,py_file_path = ? WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.name, bot.timeStamp, bot.description, bot.code, bot.workspace,bot.isScheduled, bot.py_file_path, bot.id);
    //console.log(info);
    return true;
}
exports.updateBotFilePath = (bot) => {
    console.log("Path recieved : " + bot.py_file_path );
    const sql = `UPDATE bots SET py_file_path = ? WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.py_file_path, bot.id);
    //console.log(info);
    return true;
}

exports.updateBotisScheduled = (bot) => {
    console.log("isScheduled recieved : " + bot.isScheduled );
    const sql = `UPDATE bots SET isScheduled = ? WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.isScheduled, bot.id);
    //console.log(info);
    return true;
}


//cron persistence 

exports.saveScheduleToDB = (bot_id,cron) => 
{
    console.log(cron); 
    const sql = `REPLACE INTO Schedule (id,cron) VALUES (?,?)`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot_id,cron);
    //console.log(info);
    return true;
}

exports.getAllCrons  = () => {
    const sql = "SELECT * FROM Schedule";
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}

exports.removeScheduleFromDB = (id) => {
    //console.log(id)
    const sql = `DELETE FROM Schedule WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(id);
    //console.log(info);
    return true;
}

exports.updateScheduleInDB = (bot,cron) => {
    console.log("Cron recieved : " + cron ); 
    const sql = `UPDATE Schedule SET cron = ? WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(cron,bot.id);
    //console.log(info);
    return true;
}
