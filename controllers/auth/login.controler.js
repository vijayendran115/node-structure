// login controller.js

var validate = require('express-validation');
var loginValidation = require('./../../validations/auth/login.validate');
var authService = require('./../../services/auth.service');

const login = (req, res, next) => {
  console.log(req.body); // => { email: "user@email", password: "pwd" }

  let response = authService.login(req.body);
  if(response instanceof Error) {
    return next(response)
  }

  res.json({
    "status": "success",
    response
  });
}

module.exports = [
  validate(loginValidation), // step 1 connect validation
  login // step 2 connect service
]