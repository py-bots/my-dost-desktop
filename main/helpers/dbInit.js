const sqlite = require('better-sqlite3');
const db = new sqlite("../test.db"); 
exports.db = db;

