import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

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
        <Link to="/"><MenuItem>首页</MenuItem></Link>
        <Divider />
        <Link to="/auth"><MenuItem>登录</MenuItem></Link>
        <Divider />
        <Link to="/grouphub"><MenuItem>群组</MenuItem></Link>
        <Divider />
        <Link to="/userhub"><MenuItem>个人管理</MenuItem></Link>
        <Divider />
        <Link to="/groupmanager"><MenuItem>群组管理</MenuItem></Link>
        <Divider />
      </Drawer>
    )
  }
}

export default LeftNav;
