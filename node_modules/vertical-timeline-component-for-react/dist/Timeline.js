'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Timeline.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function Timeline(_ref) {
  var animate = _ref.animate,
      children = _ref.children,
      className = _ref.className,
      lineColor = _ref.lineColor;
  return _react2.default.createElement(
    'div',
    { className: 'timeline--wrapper' },
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(className, 'timeline', {
          'timeline--animate': animate
        }),
        style: { color: '' + lineColor }
      },
      children
    )
  );
};

Timeline.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  className: _propTypes2.default.string,
  lineColor: _propTypes2.default.string,
  animate: _propTypes2.default.bool
};

Timeline.defaultProps = {
  animate: true,
  className: '',
  lineColor: '#000'
};

exports.default = Timeline;