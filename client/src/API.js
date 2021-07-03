import Meme from "./components/models/meme";
import Image from "./components/models/image";
import Font from "./components/models/font";


async function login(credentials){
    let res = await fetch("/api/sessions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });
    if(res.ok){
        const user = await res.json();
        return user;
    }
    else{
        try{
            const err = await res.json();
            throw err.message;
        }
        catch(e){
            throw e;
        }
    }
}

async function logout(){
    await fetch("/api/sessions/current", {method: "DELETE"});
}

async function getUserInfo(){
    const res = await fetch("/api/sessions/current");
    const user = await res.json();
    if(res.ok)
        return user;
    else
        throw user;
}

async function getAllMemes() {
  const response = await fetch("/api/memes/all");
  const memesJson = await response.json();
  if (response.ok) {
    return memesJson.map((meme) => Meme.from(meme));
  } else {
    throw memesJson;
  }
}

async function getPublicMemes() {
  const response = await fetch("/api/memes/public");
  const memesJson = await response.json();
  if (response.ok) {
    return memesJson.map((meme) => Meme.from(meme));
  } else {
    throw memesJson;
  }
}

async function getImages() {
  const response = await fetch("/api/images/info");
  const imagesJson = await response.json();
  if (response.ok) {
    for(let i of imagesJson){
      i["image"] = await getImage(i.id).catch((e) => {
        throw e;
      });
    }
    return imagesJson.map((i) => Image.from(i));
  } else {
    throw imagesJson;
  }
}

async function getImage(id) {
  const response = await fetch("/api/images/file/"+id);
  const img = await response.blob();
  if (response.ok) {
    return URL.createObjectURL(img);
  } 
  else {
    throw img;
  }
}

async function getFonts() {
  const response = await fetch("/api/fonts");
  const fontsJson = await response.json();
  if (response.ok) {
    return fontsJson.map((i) => Font.from(i));
  } else {
    throw fontsJson;
  }
}

function addMeme(meme) {
  return new Promise((resolve, reject) => {
    fetch("/api/memes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: meme.title,
        imageid: meme.imageid,
        pub: meme.pub,
        userid: meme.userid,
        copy: meme.copy,
        color: meme.color,
        fontid: meme.fontid,
        size: meme.size,
        upleft: meme.upleft,
        upcenter: meme.upcenter,
        upright: meme.upright,
        centerleft: meme.centerleft,
        centercenter: meme.centercenter,
        centerright: meme.centerright,
        downleft: meme.downleft,
        downcenter: meme.downcenter,
        downright: meme.downright
      }),
    })
      .then((response) => {
        if (response.ok) {
          resolve(null);
        } else {
          response
            .json()
            .then((message) => {
              reject(message);
            }) // error message in the response body
            .catch(() => {
              reject({ error: "Cannot parse server response." });
            });
        }
      })
      .catch(() => {
        reject({ error: "Cannot communicate with the server." });
      }); // connection errors
  });
}

function deleteMeme(memeid) {
  return new Promise((resolve, reject) => {
    fetch('/api/memes/' + memeid, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        resolve(null);
      } 
      else {
        response.json()
          .then((message) => { reject(message); })
          .catch(() => { reject({ error: "Cannot parse server response." }) });
        }
    }).catch(() => { reject({ error: "Cannot communicate with the server." }) });
  });
}

const API = {login, logout, getUserInfo, getAllMemes, getPublicMemes, getImages, getFonts, addMeme, deleteMeme};
export default API;