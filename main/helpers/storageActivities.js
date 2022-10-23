var dbmgr = require('./dbInit.js');
var db = dbmgr.db;
const Bot = require('../models/bot_model.js');

exports.createBotTable = () => {

    const sql = "CREATE TABLE IF NOT EXISTS bots (id TEXT PRIMARY KEY , name TEXT, timeStamp TEXT , description TEXT, code TEXT, workspace TEXT)";
    const sqlsecond = "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY , name VARCHAR(45) NOT NULL)";
    let stmt = db.prepare(sql);
    let stmt2 = db.prepare(sqlsecond);
    stmt.run();
    stmt2.run();
}


exports.getAllBots  = () => {
    const sql = "SELECT * FROM bots";
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}
/**
 * @param {Bot} bot The bot
 */
exports.addBot = (bot) => {
    console.log("addBot");
    const sql = `INSERT INTO bots (id, name, timeStamp ,description,code,workspace ) VALUES (?,?,?,?,?,?)`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.id, bot.title, bot.time ,bot.description, bot.code, bot.workspace);
    console.log(info);
    return true ;
}

exports.setUserName = (name) => {
    const sql = `INSERT INTO user (name) VALUES (?)`;
    let stmt = db.prepare(sql);
    let info = stmt.run(name);
    console.log(info);
    return true ;
}

exports.getUserName = () => {
    const sql = `SELECT name FROM user where id = (select max(id) from user) `;
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}

exports.deleteBot = (id) => {
    console.log(id)
    const sql = `DELETE FROM bots WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(id);
    console.log(info);
    return true ;
}

exports.updateBot = (bot) => {
    console.log("updateBot");
    const sql = `UPDATE bots SET name = ? , timeStamp = ? , description = ? , code = ? , workspace = ? WHERE id = ?`;
    let stmt = db.prepare(sql);
    let info = stmt.run(bot.title, bot.time ,bot.description, bot.code, bot.workspace, bot.id);
    console.log(info);
    return true ;
}
