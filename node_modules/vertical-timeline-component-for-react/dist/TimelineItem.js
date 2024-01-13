'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactVisibilitySensor = require('react-visibility-sensor');

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

require('./TimelineItem.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineItem = function (_Component) {
  _inherits(TimelineItem, _Component);

  function TimelineItem(props) {
    _classCallCheck(this, TimelineItem);

    var _this = _possibleConstructorReturn(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).call(this, props));

    _this.onVisibilitySensorChange = _this.onVisibilitySensorChange.bind(_this);
    _this.state = { visible: false };
    return _this;
  }

  _createClass(TimelineItem, [{
    key: 'onVisibilitySensorChange',
    value: function onVisibilitySensorChange(isVisible) {
      if (isVisible) {
        this.setState({ visible: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          children = _props.children,
          dateText = _props.dateText,
          dateStyle = _props.dateStyle,
          dateComponent = _props.dateComponent,
          dateInnerStyle = _props.dateInnerStyle,
          bodyContainerStyle = _props.bodyContainerStyle,
          style = _props.style,
          className = _props.className,
          visibilitySensorProps = _props.visibilitySensorProps;
      var visible = this.state.visible;

      return _react2.default.createElement(
        'div',
        {
          id: id,
          className: (0, _classnames2.default)(className, 'entry', {
            'timeline-item--no-children': children === ''
          }),
          style: style
        },
        _react2.default.createElement(
          _reactVisibilitySensor2.default,
          _extends({}, visibilitySensorProps, {
            onChange: this.onVisibilitySensorChange
          }),
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement(
                'div',
                { className: '' + (visible ? 'bounce-in' : 'is-hidden') },
                dateComponent !== null ? dateComponent : _react2.default.createElement(
                  'span',
                  { style: dateStyle, className: 'timeline-item-date' },
                  _react2.default.createElement(
                    'time',
                    {
                      style: dateInnerStyle,
                      className: 'timeline-item-dateinner',
                      title: dateText
                    },
                    dateText
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'body' },
              _react2.default.createElement(
                'div',
                {
                  className: 'body-container ' + (visible ? 'bounce-in' : 'is-hidden'),
                  style: bodyContainerStyle
                },
                children
              )
            )
          )
        )
      );
    }
  }]);

  return TimelineItem;
}(_react.Component);

TimelineItem.propTypes = {
  id: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  className: _propTypes2.default.string,
  dateStyle: _propTypes2.default.shape({}),
  dateInnerStyle: _propTypes2.default.shape({}),
  bodyContainerStyle: _propTypes2.default.shape({}),
  style: _propTypes2.default.shape({}),
  dateText: _propTypes2.default.string,
  dateComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.node]),
  visibilitySensorProps: _propTypes2.default.shape({})
};

TimelineItem.defaultProps = {
  id: '',
  children: '',
  dateComponent: null,
  className: '',
  dateStyle: null,
  bodyContainerStyle: null,
  dateInnerStyle: null,
  style: null,
  dateText: '',
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 50 } }
};

exports.default = TimelineItem;