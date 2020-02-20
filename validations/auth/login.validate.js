// login.validate.js

var Joi = require('joi');
 
module.exports = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
  },
  options: {
    status: 422 // use 422 for request validations
  }
};