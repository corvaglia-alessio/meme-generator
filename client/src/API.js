import Meme from "./components/models/meme";


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

const API = {login, logout, getUserInfo, getAllMemes, getPublicMemes};
export default API;