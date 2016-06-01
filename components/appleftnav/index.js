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
        <MenuItem onTouchTap={ e => window.location.href = "/" }>首页</MenuItem>
        <Divider />
        <MenuItem onTouchTap={ e => window.location.href = "/grouphub" }>群组</MenuItem>
        <Divider />
        <MenuItem onTouchTap={ e => window.location.href = "/userhub" }>个人管理</MenuItem>
        <Divider />
        <MenuItem onTouchTap={ e => window.location.href = "/" }>群组管理</MenuItem>
        <Divider />
      </Drawer>
    )
  }
}

export default LeftNav;
