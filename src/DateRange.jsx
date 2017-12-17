'use strict';

import React from 'react';

class DateRange extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.text}</div>;
  }

};

export default DateRange;
