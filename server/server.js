var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileReader = require('./common/reader');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var barRoutes = require('./routes/bar');
var fooRoutes = require('./routes/foo');

var error = require('./common/error');
var auth = require('./common/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//set error handler
app.use(error.handleError);
const creds = fileReader.readFile(path.join(__dirname,"env.yaml"));

app.use(auth.challenge(creds.configuration));

//set express basic settings
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//create base routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bar', barRoutes);
app.use('/foo', fooRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
