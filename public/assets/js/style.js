// style.js
function makeBorderStyle(id, strokeWidth, color) {
	var obj = document.getElementById(id);
	obj.style.border = strokeWidth + 'px solid ' + color;
}

function printMessage(id, message) {
	var obj = document.getElementById(id);
	obj.innerHTML = message;
}

exports.makeBorderStyle = makeBorderStyle;
exports.printMessage = printMessage;