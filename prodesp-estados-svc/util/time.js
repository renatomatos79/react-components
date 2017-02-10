'use strict';

function timeUtil(){
    this.moment = require("moment");
};

timeUtil.prototype.now = function(){
    return this.moment().format('DD/MM/YY hh:mm:ss a');
};

timeUtil.prototype.utc = function(){
    return this.moment().utc().format('DD/MM/YYYY HH:mm:ss a');
};

module.exports = new timeUtil();