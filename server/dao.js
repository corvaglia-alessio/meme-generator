'use strict';

const {database} = require("./database.js");

exports.listAllMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, m.size, m.upleft, m.upcenter, m.upright, m.centerleft, m.centercenter, m.centerright, m.downleft, m.downcenter, m.downright FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id";
        database.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                imageid: m.imageid,
                pub: m.pub,
                userid: m.userid,
                name: m.name,
                copy: m.copy,
                color: m.color,
                font: m.font,
                size: m.size,
                upleft: m.upleft,
                upcenter: m.upcenter,
                upright: m.upright,
                centerleft: m.centerleft,
                centercenter: m.centercenter,
                centerright: m.centerright,
                downleft: m.downleft,
                downcenter: m.downcenter,
                downright: m.downright
            }));
            resolve(memes);
        });
    });
};

exports.listPublicMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, m.size, m.upleft, m.upcenter, m.upright, m.centerleft, m.centercenter, m.centerright, m.downleft, m.downcenter, m.downright FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id AND m.pub = 1";
        database.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                imageid: m.imageid,
                pub: m.pub,
                userid: m.userid,
                name: m.name,
                copy: m.copy,
                color: m.color,
                font: m.font,
                size: m.size,
                upleft: m.upleft,
                upcenter: m.upcenter,
                upright: m.upright,
                centerleft: m.centerleft,
                centercenter: m.centercenter,
                centerright: m.centerright,
                downleft: m.downleft,
                downcenter: m.downcenter,
                downright: m.downright
            }));
            resolve(memes);
        });
    });
};

exports.getAllImagesPath = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT path FROM images';
        database.all(sql, [], (e, rows) =>{
            if(e){
                reject(e);
                return;
            }
            if(rows === undefined){
                resolve({error: "no images found"});
            }
            else{
                const images  = rows.map((i) => ({
                    path: i.path,
                }));
                resolve(images);
            }
        });
    });
};

exports.getImagesInfo = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM images";
        database.all(sql, [], (e, rows) =>{
            if(e){
                reject(e);
                return;
            }
            else{
                const images = rows.map((i) => ({
                id: i.id,
                path: i.path,
                upleft: i.upleft,
                upcenter: i.upcenter,
                upright: i.upright,
                centerleft: i.centerleft,
                centercenter: i.centercenter,
                centerright: i.centerright,
                downleft: i.downleft,
                downcenter: i.downcenter,
                downright: i.downright
            }));
            resolve(images);
            }
        });
    });
}

exports.getFonts = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM fonts";
        database.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const fonts = rows.map((f) => ({
                id: f.id,
                font: f.font,
            }));
            resolve(fonts);
        });
    });
};

exports.getImagePath = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT path FROM images WHERE id = ?';
        database.get(sql, [id], (e, row) =>{
            if(e){
                reject(e);
                return;
            }
            if(row === undefined)
                resolve({error: "image not found"});
            else{
                const img = {path: row.path};
                resolve(img);
            }
        });
    });
}

exports.addMeme = (meme) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO memes (title, imageid, pub, userid, copy, color, fontid, size, upleft, upcenter, upright, centerleft, centercenter, centerright, downleft, downcenter, downright) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    database.run(
      sql,
      [
        meme.title,
        meme.imageid,
        meme.pub,
        meme.userid,
        meme.copy,
        meme.color,
        meme.fontid,
        meme.size,
        meme.upleft,
        meme.upcenter,
        meme.upright,
        meme.centerleft,
        meme.centercenter,
        meme.centerright,
        meme.downleft,
        meme.downcenter,
        meme.downright
      ],
      function (e) {
        if (e) {
            console.log(e);
            reject(e);
            return;
        }
        resolve(this.lastID);
      }
    );
  });
};