'use strict';

var debug = require("debug")("prodesp:bin:prod");

// set the variable environment to production
process.env['APP_ENV'] = 'PROD';
var app = require('../app');
app.set('port', (process.env.PORT_BIN_WWW || 80));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});