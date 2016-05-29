import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

class LeftNav extends Component {
  render() {
    const { open, requestChange } = this.props;
    return (
      <Drawer
        open={open}
        docked={false}
        onRequestChange={ requestChange }
        >
        <Divider style={{ marginTop: '63px' }}/>
        <MenuItem>主页</MenuItem>
        <Divider />
        <MenuItem>个人管理</MenuItem>
        <Divider />
        <MenuItem>群组管理</MenuItem>
        <Divider />
      </Drawer>
    )
  }
}

export default LeftNav;