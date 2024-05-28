var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const JsonWebToken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const SECRET_JWT_CODE= "asdas9a9s7fsj";
const Database = require("./db");
var app = express();
app.use(bodyParser.json());


// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://zekimertinc:<Gsl195565!>@ac.ll8ut9p.mongodb.net/?retryWrites=true&w=majority&appName=ac";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


  // sign up
  app.post("/signup", async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    Database.User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    })
      .then(user => {
        const token = JsonWebToken.sign({ id: user._id,email:user.email }, SECRET_JWT_CODE)
        res.json({ sucess:true,token:token });
      })
      .catch(error => {
        res.json({sucess:false,error:error});
      });

    });



module.exports = app;
