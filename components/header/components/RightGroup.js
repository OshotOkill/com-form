import React, { Component } from 'react'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import { white } from 'material-ui/lib/styles/colors'


class RightGroup extends Component { 
  render() {
    return (
      <ToolbarGroup float="right">

        <IconButton tooltip="slack: nornchronos@outlook.com" style={{ float: 'left' }}>
          <FontIcon className="mdi mdi-24px mdi-slack" color={white} />
        </IconButton>
        <IconButton tooltip="email: nlfctx@outlook.com" style={{ float: 'left' }}>
          <FontIcon className="mdi mdi-24px mdi-email" color={white} />
        </IconButton>

        <ToolbarSeparator style={{ backgroundColor: white, marginRight: '12px' }}/>

        <IconButton tooltip="github">
          <FontIcon className="mdi mdi-24px mdi-github-circle" color={white}/>
        </IconButton>
        <IconButton tooltip="medium">
          <FontIcon className="mdi mdi-24px mdi-medium" color={white}/>
        </IconButton>
        <IconButton tooltip="facebook">
          <FontIcon className="mdi mdi-24px mdi-facebook" color={white}/>
        </IconButton>
        <IconButton tooltip="twitter">
          <FontIcon className="mdi mdi-24px mdi-twitter" color={white}/>
        </IconButton>
        <IconButton tooltip="google+">
          <FontIcon className="mdi mdi-24px mdi-google-plus" color={white}/>
        </IconButton>

      </ToolbarGroup>
    )
  }
}

export default RightGroup
