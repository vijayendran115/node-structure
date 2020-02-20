var createError = require('http-errors')

module.exports = {
  login: (inputData = {}) => {
    let { email = null, password = null } = inputData

    // connect DB and check if the email and password matched
    if(email !== 'user@email.com' || password !== 'pwd') {
      return new createError(404, "User not found")
    }

    let user = {
      "id": 1,
      "name": "testuser",
      "username": "user@email.com"
    };

    return user; 
  }
}