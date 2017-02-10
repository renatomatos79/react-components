'use strict';

var env = process.env['APP_ENV'].toString();

function config(){}

config.prototype.mongo = function(){
    if (env === "DEV") {
        return require("./mongo/dev.json");
    }
    return null;
}

module.exports = new config();