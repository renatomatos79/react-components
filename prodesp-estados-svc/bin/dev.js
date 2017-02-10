'use strict';

var debug = require("debug")("prodesp:bin:dev");

// set the variable environment to developer
process.env['APP_ENV'] = 'DEV';
var app = require('../app');
var port = (process.env.PORT_BIN_WWW || 21088);
app.set('port', port);

debug("listening to the port => ", port);

app.listen(app.get('port'), function() {
    debug('Node app is running on port', app.get('port'));
});