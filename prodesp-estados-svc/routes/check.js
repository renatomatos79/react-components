'use strict';

var express = require("express");
var router = express.Router();
var controller = require("../controller/check")();

router.get('/time', controller.time.bind(controller));
router.get('/ping', controller.ping.bind(controller));
router.get('/version', controller.version.bind(controller));
router.get('/mongo', controller.mongo.bind(controller));

module.exports = router;