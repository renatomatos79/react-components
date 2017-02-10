'use strict';

var debug = require("debug")("prodesp:controller:products");
var mongo = require("../db/mongo");
var ntw = require("../util/network");

function estadosController(mongoURL){
    var self = this;
    // database connection
    self.db = null;
    mongo.connect(mongoURL).then(
        function(db){
            self.db = db;
        }
    );
};

estadosController.prototype.all = function(request, response, next){
    var self = this;
    mongo.collections(self.db)
        .then(function(rows){
            response.status(201);
            response.json(rows);
        })
        .catch(function(err){
            debug("Error => ", err);
            next(err);
        });
};

module.exports = function(mongoURL){
    return new estadosController(mongoURL);
};