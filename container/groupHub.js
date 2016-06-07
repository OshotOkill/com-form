import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import { LeftNav } from '../components';
import Theme from '../constants/theme';
import * as groupActions from '../actions/groupActions';
import { Announcement, Schedule, Members, Chat } from '../components/groupHub';
import configStore from '../store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';

@connect(
  state => ({groups: state.groups}),
  groupActions)
class GroupHub extends Component {

  state = { open: false }
  
  componentWillMount() {
    this.props.fetchGroups();
  }
  
  handleRequestChange = open => {
    this.setState({ open });
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }
  
  render() {
    const { groups } = this.props;
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <AppBar 
            title="网工一班" 
            titleStyle={{paddingLeft: '20px', fontSize: '20px'}} 
            onLeftIconButtonTouchTap={ this.handleToggle }
            />
          <LeftNav 
            open={ this.state.open }
            requestChange={ this.handleRequestChange }
            />
          <Announcement announcement={groups[0].announcement} />           
          <div style={{width: '960px', margin: '100px auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-betweens' }}>
            <Schedule schedules={groups[0].schedules} />
            <Chat messages={groups[0].messages} />            
          </div>
          <Members />
        </div>
      </MuiThemeProvider>
    )
  }
}

injectTapEventPlugin();

render(
  <Provider store={ configStore() }>
    <GroupHub />
  </Provider>,
  document.getElementById('root')
);

