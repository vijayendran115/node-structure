require('dotenv').config()

var express = require('express');

var app = express();
var cookieParser = require('cookie-parser');
var path = require('path');
var ev = require('express-validation');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'))

const authRoutes = require('./routes/auth');
app.use('/', [
  authRoutes
]);

// error handler
app.use(function (err, req, res, next) {
  // specific for validation errors
  if (err instanceof ev.ValidationError) { 
    return res.status(err.status).json(err)
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.error(err);
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
  res.send(res.locals.error)
});

module.exports = app;