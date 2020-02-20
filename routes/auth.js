var express = require('express');
var router = express.Router();

const login = require('./../controllers/auth/login.controler');
router.post('/auth/login', login);

module.exports = router;