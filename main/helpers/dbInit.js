const sqlite = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { app } = require('electron');

const dbPath = path.join(app.getPath('home'), '..', 'Public', 'PyBOTs LLC', 'DOST', 'database', 'data.sqlite');

if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}
// else {
//     // console.log('Directory already exists: ' + path.dirname(dbPath));
//     pass
// }

const db = new sqlite(dbPath);
exports.db = db;
