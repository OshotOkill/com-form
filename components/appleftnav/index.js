import React, { Component } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import Divider from 'material-ui/lib/divider'
import MenuItem from 'material-ui/lib/menus/menu-item'

class AppLeftNav extends Component {
  render() {
    const { open, requestChange } = this.props
    return (
      <LeftNav
        open={open}
        docked={false}
        onRequestChange={ requestChange }
        >
        <Divider style={{ marginTop: '63px' }}/>
        <MenuItem >C </MenuItem>
        <Divider />
        <MenuItem>C++ </MenuItem>
        <Divider />
        <MenuItem>C# </MenuItem>
        <Divider />
        <MenuItem>UWP </MenuItem>
        <Divider />
        <MenuItem>HTML / JavaScript </MenuItem>
      </LeftNav>
    )
  }
}

export default AppLeftNav