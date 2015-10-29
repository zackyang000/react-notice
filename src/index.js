export NotificationSystem from 'react-notification-system';

let _notificationSystem = undefined;
let _option = undefined;

export default {
  setNotice: function setNotice(notification, option = {}) {
    _notificationSystem = notification;
    _option = {
      autoDismiss: 10,
      ...option,
    };
  },
  notice: function notice(message, level = 'success', option = {}) {
    _notificationSystem.addNotification({
      ..._option,
      ...option,
      message,
      level,
    });
  },
};
