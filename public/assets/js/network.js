// network.js
function requestAndPrint(id, url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onerror = function(e) {
		printMessage(id, e);
		callback(e);
	};
	
	xhr.onload = function(e) {
		var result = xhr.responseText;
		printMessage(id, result);
		callback(result);
	};

	xhr.send();
}