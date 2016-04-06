import React, { Component } from 'react'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import LeftGroup from './components/LeftGroup'
import RightGroup from './components/RightGroup'

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

export default Header