import React, { Component } from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
import { white } from 'material-ui/styles/colors';

import { 
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';

class LeftGroup extends Component {
  render() {
    const { Toggle } = this.context;
    
    return (
      <ToolbarGroup float="left">

        <IconButton style={{ float: 'left', margin: '8px 0 8px -16px' }} onClick={ Toggle } >
          <NavigationMenu color={white} />
        </IconButton>
        <ToolbarSeparator style={{ backgroundColor: white, marginRight: '12px' }}/>
        <IconButton style={{ float: 'left', margin: '8px 0' }} label="首页">
          <Home color={white} />
        </IconButton>
        <ToolbarTitle text="首页" />
        <ToolbarTitle text="聊天室" />
        <ToolbarTitle text="关于" />

      </ToolbarGroup>
    )
  }
}

LeftGroup.contextTypes = {
  Toggle: React.PropTypes.func
};

export default LeftGroup;