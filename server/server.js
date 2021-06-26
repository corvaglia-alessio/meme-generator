'use strict';

const express = require('express');
const morgan = require('morgan');
const userDao = require('./userdao');
const dao = require('./dao');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const session = require("express-session");

//PASSPORT SECTION FOR LOGIN AND LOGOUT
passport.use(
  new LocalStrategy(function (username, password, done){
    userDao.getUser(username, password).then((user) => {
      if(!user)
        return done(null, false, {
          msg: "Incorrect username and or password"
        });
        return done(null, user);
    })
  })
);

passport.serializeUser = (user, done) => {
  done(null, user.id);
};

passport.deserializeUser((id, done) =>{
  userDao.getUserById(id).then((user) => {
    done(null, user);
  })
  .catch((e) => {
    done(err, null);
  })
})


// init express
const app = new express();
const port = 3001;

app.use(morgan("dev"));
app.use(express.json());
app.use(session({
  secret: "281557Exam2MemeGenerator",
  resave: false,
  saveUninitialized: false
})
);
app.use(passport.initialize());
app.use(passport.session());

const loggedIn = (req, res, next) => {
  if(req.isAuthenticated())
    return next();
  return res.status(401).json({error: "Not authenticated!"});
};

//QUERIES SECTION

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


// activate the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});