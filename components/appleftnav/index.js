import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'

class LeftNav extends Component {
  render() {
    const { open, requestChange } = this.props
    return (
      <Drawer
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
      </Drawer>
    )
  }
}

export default LeftNav