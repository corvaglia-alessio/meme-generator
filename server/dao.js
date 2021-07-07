'use strict';

const {database} = require("./database.js");

exports.listAllMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, m.size, m.text1, m.text2, m.text3 FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id";
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
                text1: m.text1,
                text2: m.text2,
                text3: m.text3
            }));
            resolve(memes);
        });
    });
};

exports.listPublicMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, m.size, m.text1, m.text2, m.text3 FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id AND m.pub = 1";
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
                text1: m.text1,
                text2: m.text2,
                text3: m.text3
            }));
            resolve(memes);
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
      "INSERT INTO memes (title, imageid, pub, userid, copy, color, fontid, size, text1, text2, text3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
        meme.text1,
        meme.text2,
        meme.text3
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

exports.deleteMeme = (memeid, userid) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM memes WHERE id = ? AND userid = ?';
    database.run(sql, [memeid, userid], (e) => {
      if (e) {
        reject(e);
        return;
      } 
      else
        resolve(null);
    });
  });
}