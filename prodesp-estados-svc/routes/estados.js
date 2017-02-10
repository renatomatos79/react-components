'use strict';

var express = require("express");
var router = express.Router();
var config = require('../config/config').mongo();
var controller = require('../controller/estados')(config.url);

router.get('/all', controller.all.bind(controller));

module.exports = router;