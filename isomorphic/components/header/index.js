import React, { Component } from 'react';
import { Toolbar } from 'material-ui/Toolbar';
import LeftGroup from './components/LeftGroup';
import RightGroup from './components/RightGroup';

class Header extends Component {
  render() {
    return (
      <Toolbar>
        <LeftGroup />
        <RightGroup />
      </Toolbar>
    )
  }
}

export default Header;