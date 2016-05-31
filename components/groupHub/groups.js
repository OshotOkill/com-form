import React, { Component } from 'react';
import Announcement from './announcement';
import Schedule from './schedule';
import Members from './members'

class Groups extends Component {
  render() {
    return (
      <div>
        <Announcement />
        <Schedule />
        <Members />
      </div>
    )
  }
}

export default Groups;
