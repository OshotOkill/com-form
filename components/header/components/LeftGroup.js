import React, { Component } from 'react'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu'
import IconButton from 'material-ui/lib/icon-button'
import Home from 'material-ui/lib/svg-icons/action/home'
import { white } from 'material-ui/lib/styles/colors'


class LeftGroup extends Component {
  render() {
    const { Toggle } = this.props
    return (
      <ToolbarGroup float="left">

        <IconButton style={{ float: 'left', margin: '8px 0 8px -16px' }} onClick={ this.context.Toggle } >
          <NavigationMenu color={white} />
        </IconButton>
        <ToolbarSeparator style={{ backgroundColor: white, marginRight: '12px' }}/>
        <IconButton style={{ float: 'left', margin: '8px 0' }} label="首页">
          <Home color={white} />
        </IconButton>
        <ToolbarTitle text="首页" />

      </ToolbarGroup>
    )
  }
}

LeftGroup.contextTypes = {
  Toggle: React.PropTypes.func
}

export default LeftGroup