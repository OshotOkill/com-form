import React, { Component } from 'react';
import Announcement from './announcement';
import Schedule from './schedule';


class Groups extends Component {
  render() {
    return (
      <div>
        <Announcement />
        <Schedule />
      </div>
    )
  }
}

export default Groups;
