/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/app.js":
/*!*********************************!*\
  !*** ./public/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// app.js\nvar network = __webpack_require__(/*! ./network.js */ \"./public/assets/js/network.js\");\nvar style = __webpack_require__(/*! ./style.js */ \"./public/assets/js/style.js\");\nvar util = __webpack_require__(/*! ./util.js */ \"./public/assets/js/util.js\");\n\nconsole.log(network);\nconsole.log(style);\nconsole.log(util);\n\nfunction request() {\n\tvar url = 'https://lnc.m.hangame.com:10443/hsp/lnc/getLaunchingInfos.json?gameNo=9104&gameClientVersion=1.0.0&platformSdkVersion=2.28&osType=2&osVersion=4.1.2&udid=d08dffedb847426942aa&deviceModel=SHW-M440S&market=KG&lcnt=1402975221717&language=ko&locale=KR&country=KR&mobileCountry=45005';\n\tutil.askMessage('요청을 보내시겠습니까?', function(e) {\n\t\tnetwork.requestAndPrint('result', url, function(result) {\n\t\t\tstyle.makeBorderStyle('result', 5, '#009900');\n\t\t});\n\t}, function(e) {\n\t\tstyle.makeBorderStyle('result', 5, '#990000');\n\t\tstyle.printMessage('result', '요청을 취소하였습니다.');\n\t});\n}\n\nwindow.onload = function() {\n\t(function(requestBtn) {\n\t\tvar ele = document.getElementById(requestBtn);\n\t\tele.addEventListener('click', function() {\n\t\t\trequest();\n\t\t});\n\t})('requestBtn');\t\n};\n\n//# sourceURL=webpack:///./public/assets/js/app.js?");

/***/ }),

/***/ "./public/assets/js/network.js":
/*!*************************************!*\
  !*** ./public/assets/js/network.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// network.js\nvar style = __webpack_require__(/*! ./style.js */ \"./public/assets/js/style.js\");\n\nfunction requestAndPrint(id, url, callback) {\n\tvar xhr = new XMLHttpRequest();\n\txhr.open('GET', url);\n\n\txhr.onerror = function(e) {\n\t\tstyle.printMessage(id, e);\n\t\tcallback(e);\n\t};\n\t\n\txhr.onload = function(e) {\n\t\tvar result = xhr.responseText;\n\t\tstyle.printMessage(id, result);\n\t\tcallback(result);\n\t};\n\n\txhr.send();\n}\n\nexports.requestAndPrint = requestAndPrint;\n\n//# sourceURL=webpack:///./public/assets/js/network.js?");

/***/ }),

/***/ "./public/assets/js/style.js":
/*!***********************************!*\
  !*** ./public/assets/js/style.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// style.js\nfunction makeBorderStyle(id, strokeWidth, color) {\n\tvar obj = document.getElementById(id);\n\tobj.style.border = strokeWidth + 'px solid ' + color;\n}\n\nfunction printMessage(id, message) {\n\tvar obj = document.getElementById(id);\n\tobj.innerHTML = message;\n}\n\nexports.makeBorderStyle = makeBorderStyle;\nexports.printMessage = printMessage;\n\n//# sourceURL=webpack:///./public/assets/js/style.js?");

/***/ }),

/***/ "./public/assets/js/util.js":
/*!**********************************!*\
  !*** ./public/assets/js/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// util.js\nfunction askMessage(message, okCallback, cancelCallback) {\n\tif (confirm(message)) {\n\t\tokCallback();\n\t} else {\n\t\tcancelCallback();\n\t}\n}\n\nexports.askMessage = askMessage;\n\n//# sourceURL=webpack:///./public/assets/js/util.js?");

/***/ })

/******/ });