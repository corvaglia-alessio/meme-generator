'use strict';

const express = require('express');
const morgan = require('morgan');
const userDao = require('./userdao');
const dao = require('./dao');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");
const { check, validationResult } = require("express-validator");

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

const checkSize = (req, res, next) => {
  if(req.body.size > 0)
    return next();
  return res.status(422).json({error: "Size param is wrong"});
}

const checkTexts = (req, res, next) => {
  if(req.body.text1 || req.body.text2 || req.body.text3)
    return next();
  return res.status(422).json({error: "At least one text is required"});
}

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
app.get("/api/images/file/:id", async (req, res) =>{
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

//LIST THE AVAILABLE FONTS
app.get("/api/fonts", async (req, res) => {
  try{
    const f = await dao.getFonts();
    res.json(f);
  }
  catch(e){
    res.status(500).end();
  }
});

//INSERT A NEW MEME
app.post('/api/memes', loggedIn, [
  check('title').notEmpty(),
  check('userid').isInt(),
  check('copy').isInt({min: 0, max: 1}),
  check('fontid').isInt(),
  check('color').notEmpty().isString().isLength({min: 7, max: 7}),
  ], checkSize, checkTexts, 

  async (req, res) => {
    const e = validationResult(req);
    if (!e.isEmpty()) {
      return res.status(422).json({errors: e.array()});
    }
    try {
      await dao.addMeme(req.body);
      res.status(201).end();
    } 
    catch(err) {
      res.status(503).json({error: "It's not possible to add the meme"});
    }
});

//DELETE A MEME
app.delete('/api/memes/:id', loggedIn, async (req, res) => {
  try {
    await dao.deleteMeme(req.params.id, req.user.id);
    res.status(204).end();
  } catch(err) {
    res.status(503).json({ error: `Db error`});
  }
});

// activate the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});