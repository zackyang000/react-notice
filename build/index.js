'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactNotificationSystem = require('react-notification-system');

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

exports.NotificationSystem = _reactNotificationSystem2['default'];

var _notificationSystem = undefined;
var _option = undefined;

exports['default'] = {
  setNotice: function setNotice(notification) {
    var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _notificationSystem = notification;
    _option = _extends({
      autoDismiss: 10
    }, option);
  },
  notice: function notice(message) {
    var level = arguments.length <= 1 || arguments[1] === undefined ? 'success' : arguments[1];
    var option = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _notificationSystem.addNotification(_extends({}, _option, option, {
      message: message,
      level: level
    }));
  }
};