'use strict';

var debug = require("debug")("prodesp:db:mongo");
var MongoClient = require('mongodb').MongoClient;
var RSVP = require('rsvp');

function mongo(){ }

mongo.prototype.connect = function(url){
    var promise = new RSVP.Promise(function(resolve, reject) {
        MongoClient.connect(url, function(err, db) {
            if(err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });
    return promise;
}

mongo.prototype.insert = function(db, collectionName, json){
    var promise = new RSVP.Promise(function(resolve, reject) {
        var collection = db.collection(collectionName);
        collection.insert(json, {w:1}, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    return promise;
}

mongo.prototype.findOne = function(db, collectionName, json){
    var promise = new RSVP.Promise(function(resolve, reject) {
        var collection = db.collection(collectionName);
        collection.findOne(json, function(err, item) {
            if (err) {
                reject(err);
            } else {
                resolve(item);
            }
        });
    });
    return promise;
}

mongo.prototype.collections = function(db){
    var promise = new RSVP.Promise(function(resolve, reject) {
        db.collectionNames(function(err, collections){
            if (err) {
                reject(err);
            } else {
                resolve(collections);
            }
        });
    });
    return promise;
}


mongo.prototype.find = function(db, collectionName, json){
    var promise = new RSVP.Promise(function(resolve, reject) {
        var rows = [];
        var cursor = db.collection(collectionName).find();
        cursor.each(function(err, item) {
            if(item == null) {
                return;
            }
            rows.push(item);
        });
        debug("result => ", rows);
        resolve(rows);
    });
    return promise;
}

module.exports = new mongo();
