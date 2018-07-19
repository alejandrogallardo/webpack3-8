webpackJsonp([0],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _message = __webpack_require__(8);

var _x = __webpack_require__(9);

var _x2 = _interopRequireDefault(_x);

var _tester = __webpack_require__(10);

var _tester2 = _interopRequireDefault(_tester);

var _renderToDom = __webpack_require__(6);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _nombres = __webpack_require__(18);

var _nombres2 = _interopRequireDefault(_nombres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_nombres2.default, { data: _tester2.default }), document.getElementById('container'));

console.log(_tester2.default);

_tester2.default.nombres.forEach(function (nombres) {
    var element = document.createElement('li');
    element.textContent = nombres.name;
    (0, _renderToDom2.default)(element);
});

document.write(_message.firstMessage);
(0, _message.delayedMessage)();
var img = document.createElement('img');
img.setAttribute('src', _x2.default);
//img.setAttribute('width', 50);
//img.setAttribute('height', 50);
document.body.append(img);
//console,console.log("Test de webpack");
console, console.log("Test de webpack desde bundle");

/***/ })

},[19]);