'use strict';

var express = require("express");
var router = express.Router();

// mapp routes
router.use('/estados', require('./estados'));
router.use('/check', require('./check'));

module.exports = router;