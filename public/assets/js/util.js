// util.js
function askMessage(message, okCallback, cancelCallback) {
	if (confirm(message)) {
		okCallback();
	} else {
		cancelCallback();
	}
}