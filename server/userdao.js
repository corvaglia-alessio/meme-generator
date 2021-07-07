'use strict'

const {database} = require("./database.js");
const bcrypt = require('bcrypt');

exports.getUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE email = ? ';
        database.get(sql, [email], (e, row) =>{
            if(e)
                reject(e);
            else if (row === undefined)
                resolve(false);
            else{
                const user = {id: row.id, username: row.email, name: row.name};
                bcrypt.compare(password, row.hash).then(result => {
                    if(result)
                        resolve(user);
                    else
                        resolve(false);
                });
            }   
        });
    });
};

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
      database.get(sql, [id], (e, row) => {
        if (e) 
          reject(e);
        else if (row === undefined)
          resolve({error: 'user not found!'});
        else {
          const user = {id: row.id, username: row.email, name: row.name}
          resolve(user);
        }
    });
  });
};