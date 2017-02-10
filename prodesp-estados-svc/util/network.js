'use strict';

var debug = require("debug")("fortegroup:util:network");
var jwt = require('jsonwebtoken');
var RSVP = require('rsvp');

function networkUtil(){}

networkUtil.prototype.ip = function(request){
    if (request.headers['x-forwarded-for']) {
        return request.headers['x-forwarded-for'].split(",")[0];
    } else if (request.connection && request.connection.remoteAddress) {
        return request.connection.remoteAddress;
    } else {
        return request.ip;
    }
    return "";
};

networkUtil.prototype.get = function(url, header){
    var requestify = require('requestify');
    return requestify.request(url, {
        method: 'GET',
        headers: header,
        dataType: 'json'
    });
};

networkUtil.prototype.post = function(url, header, data){
    var requestify = require('requestify');
    return requestify.request(url, {
        method: 'POST',
        body: data,
        headers: header,
        dataType: 'json'
    });
};

networkUtil.prototype.validateToken = function(req, jwtkey){
    var token = req.body.token || req.query.token || req.headers['access-token'];
    var promise = new RSVP.Promise(function(resolve, reject) {
        if (token){
            debug("token => ", token);
            jwt.verify(token, jwtkey, function(err, decoded) {
                if (err) {
                    debug("token error => ", err);
                    reject({error: "Failed to authenticate token"});
                } else {
                    debug("token ok");
                    resolve(null);
                }
            });
        } else {
            reject({error: "no token provided"});
        }
    });
    return promise;
};


module.exports = new networkUtil();