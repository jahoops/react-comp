(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CompLib = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Hello = require('../lib/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

var _DateRange = require('../lib/DateRange');

var _DateRange2 = _interopRequireDefault(_DateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Hello: _Hello2.default,
  DateRange: _DateRange2.default
};

},{"../lib/DateRange":2,"../lib/Hello":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateRange = _react2.default.createClass({
  displayName: 'DateRange',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      'DateRange'
    );
  }
});

exports.default = DateRange;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = _react2.default.createClass({
  displayName: 'Hello',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      'Hello'
    );
  }
});

exports.default = Hello;
module.exports = exports['default'];

},{}]},{},[1,2,3])(3)
});