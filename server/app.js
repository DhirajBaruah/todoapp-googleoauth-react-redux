const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

const { MONGO_URL } = require("./util/secrets");
const { COOKIE_KEY } = require("./util/secrets");

const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./services/passport-setup');


// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

//db connection
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  }).then( () => {
    console.log("DB CONNECTED")
}).catch( err => {
    console.log("ERROR CONNECTING ", err)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});


// import app routes
const todoRoutes = require("./routes/todo");
const authRoutes = require('./routes/auth');

// app routes
app.use("/todo", todoRoutes);
app.use("/auth", authRoutes);


module.exports = app;
