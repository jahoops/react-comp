'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAlert = require('react-alert');

var _reactAlert2 = _interopRequireDefault(_reactAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    return _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call(this, props));
  }

  _createClass(DateRange, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var alertOptions = {
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      };

      var showAlert = function showAlert() {
        _this2.msg.show('Some text or component', {
          time: 2000,
          type: 'success',
          icon: _react2.default.createElement('img', { src: 'path/to/some/img/32x32.png' })
        });
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
            return _this2.msg = a;
          } }, this.alertOptions)),
        _react2.default.createElement(
          'button',
          { onClick: this.showAlert },
          'Show Alert'
        )
      );
    }
  }]);

  return DateRange;
}(_react2.default.Component);

;

exports.default = DateRange;
module.exports = exports['default'];
//# sourceMappingURL=DateRange.js.map