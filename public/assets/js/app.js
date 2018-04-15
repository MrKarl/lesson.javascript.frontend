// app.js
var network = require('./network.js');
var style = require('./style.js');
var util = require('./util.js');

function request() {
	var url = 'https://lnc.m.hangame.com:10443/hsp/lnc/getLaunchingInfos.json?gameNo=9104&gameClientVersion=1.0.0&platformSdkVersion=2.28&osType=2&osVersion=4.1.2&udid=d08dffedb847426942aa&deviceModel=SHW-M440S&market=KG&lcnt=1402975221717&language=ko&locale=KR&country=KR&mobileCountry=45005';
	util.askMessage('요청을 보내시겠습니까?', function(e) {
		network.requestAndPrint('result', url, function(result) {
			style.makeBorderStyle('result', 5, '#009900');
		});
	}, function(e) {
		style.makeBorderStyle('result', 5, '#990000');
		style.printMessage('result', '요청을 취소하였습니다.');
	});
}

window.onload = function() {
	(function(requestBtn) {
		var ele = document.getElementById(requestBtn);
		ele.addEventListener('click', function() {
			request();
		});
	})('requestBtn');	
};