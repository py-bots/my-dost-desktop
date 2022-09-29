var dbmgr = require('./dbInit.js');
var db = dbmgr.db;
const Bot = require('../models/bot_model.js');

exports.createBotTable = () => {
    const sql = "CREATE TABLE IF NOT EXISTS bots (id INTEGER PRIMARY KEY , name TEXT, description TEXT, code TEXT, workspace TEXT)";
    let stmt = db.prepare(sql);
    stmt.run();
}


exports.getAllBots  = () => {
    const sql = "SELECT id,name FROM bots";
    let stmt = db.prepare(sql);
    let rows = stmt.all();
    return rows;
}
/**
 * @param {Bot} bot The bot
 */
exports.addBot = (bot) => {
    const sql = `INSERT INTO bots (id, name, description,code,workspace ) VALUES (${bot.id}, "${bot.name}", "${bot.description}", "${bot.code}", "${bot.workspace}")`;
    let stmt = db.prepare(sql);
    stmt.run();
}