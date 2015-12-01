react-notice
==========

A mixin way for use notifications.

this project is based on react-notification-system. Just simply use mixin to wrapped.

  [![NPM Version](https://img.shields.io/npm/v/react-notice.svg?style=flat)](https://www.npmjs.org/package/react-notice)
  [![npm](https://img.shields.io/npm/dm/react-notice.svg?style=flat)](https://www.npmjs.org/package/react-notice)
  [![Build Status](https://travis-ci.org/TossShinHwa/react-notice.svg?branch=master&style=flat)](https://travis-ci.org/TossShinHwa/react-notice)
  [![License](http://img.shields.io/npm/l/react-notice.svg?style=flat)](https://raw.githubusercontent.com/TossShinHwa/react-notice/master/LICENSE)

```js
npm install --save react-notice
```

## Usage

Step.1 Declare it in the Root App.

```js
import NoticeMixin, { NotificationSystem } from 'react-notice';

var App = React.createClass({
  mixins: [NoticeMixin],

  componentDidMount() {
    this.setNotice(this.refs.notificationSystem);
  }

  render: function() {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        ...
      </div>
    );
  }
});
```

Setp.2 Use it in any component.

```js
var Comp = React.createClass({
  mixins: [NoticeMixin],
  render: function() {
    return (
      <div>
        <button onClick={this.notice("this's a success message.")}>success</button>
        <button onClick={this.notice("this's a error message.", "error")}>error</button>
        <button onClick={this.notice("this's a warning message.", "warning")}>warning</button>
        <button onClick={this.notice("this's a info message.", "info")}>info</button>
      </div>
    );
  }
});
```
