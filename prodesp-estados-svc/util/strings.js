'use strict';

function stringUtil(){}

stringUtil.prototype.guid = function(){
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

stringUtil.prototype.format = function (str, values) {
	return str.replace(/{(\d+)}/g, function(match, number) {
		return typeof values[number] != 'undefined' ? values[number]: match;
	});
},

stringUtil.prototype.toInt = function(str){
	var value = parseInt(str);
	return isNaN(value) ? 0 : value;
};

stringUtil.prototype.toFloat = function(str){
	var value = parseFloat(str);
	return isNaN(value) ? 0 : value;
};

module.exports = new stringUtil();
