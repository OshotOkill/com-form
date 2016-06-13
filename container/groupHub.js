import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { LeftNav } from '../components';
import Theme from '../constants/theme';
import * as groupActions from '../actions/groupActions';
import { Announcement, Schedule, Members, Chat } from '../components/groupHub';


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
    console.log(groups);
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
          {/*<Announcement announcement={groups} /> */}         
          <div style={{width: '960px', margin: '100px auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-betweens' }}>
            {/*<Schedule schedules={groups} />
            <Chat messages={groups} />*/}            
          </div>
          <Members />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default GroupHub;
