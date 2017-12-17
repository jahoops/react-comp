'use strict';

import React from 'react';
import AlertContainer from 'react-alert';

export default class DateRange extends React.Component {
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src='path/to/some/img/32x32.png' />
    });
  }

  render() {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    );
  }

};

