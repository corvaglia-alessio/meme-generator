'use strict';

const {database} = require("./database.js");

exports.listAllMemes = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, f.size, m.upleft, m.upcenter, m.upright, m.centerleft, m.centercenter, m.centerright, m.downleft, m.downcenter, m.downright FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id";
        database.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                imgid: m.imgid,
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
        const sql = "SELECT m.id, m.title, m.imageid, m.pub, m.userid, u.name, m.copy, m.color, f.font, f.size, m.upleft, m.upcenter, m.upright, m.centerleft, m.centercenter, m.centerright, m.downleft, m.downcenter, m.downright FROM memes m, users u, fonts f WHERE m.userid = u.id AND m.fontid = f.id AND m.pub = 1";
        database.all(sql, [], (e, rows) => {
            if(e){
                reject(e);
                return;
            }
            const memes = rows.map((m) => ({
                id: m.id,
                title: m.title,
                imgid: m.imgid,
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


exports.getImageInfo = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM images WHERE id = ?';
        database.get(sql, [id], (e, row) =>{
            if(e){
                reject(e);
                return;
            }
            if(row === undefined){
                resolve({error: "image not found"});
            }
            else{
                const img = {
                    id: row.id,
                    up: row.up,
                    center: row.center,
                    down: row.down
                }
                resolve(img);
            }
        });
    });
}

exports.getImagesInfo = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM images';
        database.all(sql, [], (e, rows) =>{
            if(e){
                reject(e);
                return;
            }
            if(rows === undefined){
                resolve({error: "images not found"});
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
