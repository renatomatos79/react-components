'use strict';

var debug = require("debug")("prodesp:controller:check");
var time = require("../util/time");
var pkg = require("../package.json");
var config = require("../config/config");

function checkController(){}

checkController.prototype.time = function(request, response, next){
    response.json({
        "now": time.now(),
        "utc": time.utc()
    });
};

checkController.prototype.ping = function(request, response, next){
    response.send("PONG");
}

checkController.prototype.version = function(request, response, next){
    response.json({
        "application-name": pkg.name,
        "application-version": pkg.version,
        "application-description": pkg.description
    });
};

checkController.prototype.mongo = function(request, response, next){
    var mongoURL = config.mongo().url;
    var mongo = require("../db/mongo");
    var temp = new Array();
    mongo.connect(mongoURL).then(
        function(db){
            db.listCollections().toArray(function(err, collections){
                collections.forEach(function(c){
                    //debug("c => ", c.name);
                    temp.push(c.name);
                });
            });

            debug("temp => ", temp);

            response.json(temp);

        }
    );


};

module.exports = function(){
    return new checkController();
};