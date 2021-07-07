'use strict';

const sqlite = require ('sqlite3').verbose();

const database = new sqlite.Database('memes.db', (e) =>{
    if (e) throw e;
})

module.exports = {database};