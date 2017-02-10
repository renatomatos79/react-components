'use strict';

var debug = require("debug")("prodesp:app");
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var app = express();
var config = require("./config/config");

// server config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

// log requests
app.use(morgan('dev'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, resp, next){
    if (req.url === "/favicon.ico"){
        resp.writeHead(200, {'Content-Type': 'image/x-icon'});
        resp.end('');
    } else {
        next();
    }
});

// router
app.use('/', require('./routes/index'));

// URL not found
app.use(function(req, resp, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler - Internal Error
app.use(function(err, req, resp, next){
    debug("status => ", err.status, " message => ", err.message);
    resp.status(err.status || 500).json({
       status: err.status,
       message : err.message
    });
});

// listener
module.exports = app;