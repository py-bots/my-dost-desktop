const sqlite = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { app } = require('electron');

const dbPath = path.join(app.getPath('appData'), 'PyBOTs LLC', 'DOST', 'data', 'user.sqlite');

if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
     console.log('Created directory: ' + path.dirname(dbPath));
} else {
    // console.log('Directory already exists: ' + path.dirname(dbPath));
}

const db = new sqlite(dbPath);
exports.db = db;
