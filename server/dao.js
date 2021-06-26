'use strict';

const {db} = require("./database.js");

exports.listAllMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.textup, m.textcenter, m.textdown, m.imgid, m.public, m.copy,  m.color, u.name, f.font, FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id";
        db.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                textup: m.textup,
                textcenter: m.textcenter,
                textdown: m.textdown,
                imgid: m.imgid,
                public: m.public,
                copy: m.copy,
                color: m.color,
                name: m.name,
                font: m.font
            }));
            resolve(memes);
        });
    });
};

exports.listPublicMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.textup, m.textcenter, m.textdown, m.imgid, m.public, m.copy,  m.color, u.name, f.font, FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id AND m.public = 1";
        db.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                textup: m.textup,
                textcenter: m.textcenter,
                textdown: m.textdown,
                imgid: m.imgid,
                public: m.public,
                copy: m.copy,
                color: m.color,
                name: m.name,
                font: m.font
            }));
            resolve(memes);
        });
    });
};
