'use strict';

const express = require('express');
const morgan = require('morgan');
const userDao = require('./userdao');
const dao = require('./dao');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");

//PASSPORT SECTION FOR LOGIN AND LOGOUT
passport.use(
  new LocalStrategy(function (username, password, done){
    userDao.getUser(username, password).then((user) => {
      if(!user)
        return done(null, false, {msg: "Incorrect username and/or password"});
      return done(null, user);
    })
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userDao.getUserById(id)
    .then(user => {
      done(null, user);
    }).catch(err => {
      done(err, null);
    });
});

// init express
const app = new express();
const port = 3001;

app.use(morgan("dev"));
app.use(express.json());

//middleware for protected queries
const loggedIn = (req, res, next) => {
  if(req.isAuthenticated())
    return next();
  return res.status(401).json({error: "Not authenticated!"});
};

app.use(session({
  secret: "281557Exam2MemeGenerator",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



//APIs for users 

//login
app.post("/api/sessions", function (req, res, next){
  passport.authenticate("local", (err, user, info) => {
    if(err)
      return next(err);
    if(!user){
      return res.status(401).json(info);
    }
    req.login(user, (e) => {
      if(e)
        return next(e);
      return res.json(req.user);
    });
  })(req, res, next);
});

//logout
app.delete("/api/sessions/current", (req, res) =>{
  req.logout();
  res.end();
});

//check session
app.get("/api/sessions/current", (req, res) => {
  if(req.isAuthenticated())
    res.status(200).json(req.user);
  else
    res.status(401).json({error: 'user non authenticated!'});
});


//APIs for contents

//LIST ALL MEMES (login protected)
app.get("/api/memes/all", loggedIn, async (req, res) => {
  try{
    const m = await dao.listAllMemes();
    res.json(m);
  }
  catch (e){
    res.status(500).end();
  }
});

//LIST PUBLIC MEME ONLY
app.get("/api/memes/public", async (req, res) => {
  try{
    const m = await dao.listPublicMemes();
    res.json(m);
  }
  catch (e){
    res.status(500).end();
  }
});

//SEND AN IMAGE RESOURCE
app.get("/api/images/:id", async (req, res) =>{
  try{
    const image = await dao.getImagePath(req.params.id);
    if(image.error)
      res.status(404).json(result);
    else{
      res.sendFile(`./${image.path}`, {root: __dirname});
    }
  }
  catch(e){
    res.status(500).end();
  }
});

/*
//SEND ALL IMAGE RESOURCES
app.get("/api/images", async (req, res) =>{
  try{
    const image = await dao.getAllImagesPath(req.params.id);
    if(image.error)
      res.status(404).json(result);
    else{
      //send the images!
    }
  }
  catch(e){
    res.status(500).end();
  }
});

//LIST THE INFOS OF AN IMAGE
app.get('/api/images/info/:id', async (req, res) => {
  try{
    const imageinfo = await dao.getImageInfo(req.params.id);
    if(imageinfo.error)
      res.status(404).json(result);
    else
      res.json(imageinfo);
  }
  catch(e){
    res.status(500).end();
  }
});
*/

//LIST THE INFOS OF ALL IMAGES
app.get("/api/images/info", async (req, res) => {
  try{
    const i = await dao.getImagesInfo();
    res.json(i);
  }
  catch(e){
    res.status(500).end();
  }
});

// activate the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});