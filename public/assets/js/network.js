// network.js
var style = require('./style.js');

function requestAndPrint(id, url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onerror = function(e) {
		style.printMessage(id, e);
		callback(e);
	};
	
	xhr.onload = function(e) {
		var result = xhr.responseText;
		style.printMessage(id, result);
		callback(result);
	};

	xhr.send();
}

exports.requestAndPrint = requestAndPrint;