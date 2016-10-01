'use strict';

var express = require('express');
var sessionController = require('../controllers/sessionController')();

var SessionRoute = function() {
  var router = express.Router();

  router.post('/login', sessionController.login);
  router.post('/register', sessionController.register);

  return router;
};

module.exports = SessionRoute;
