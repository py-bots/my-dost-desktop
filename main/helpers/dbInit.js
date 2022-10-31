const sqlite = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { app } = require('electron');
// get public user path

const dbPath = path.join(app.getPath('appData'), 'PyBots', 'My-DOST', 'data', 'user.sqlite');

// if path does not exist, create it
if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    console.log('Created directory: ' + path.dirname(dbPath));
} else {
    console.log('Directory already exists: ' + path.dirname(dbPath));
}




const db = new sqlite(dbPath);
exports.db = db;

