async function login(credentials){
    let res = await fetch("/api/sessions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });
    console.log(JSON.stringify(credentials));
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

const API = {login, logout, getUserInfo};
export default API;