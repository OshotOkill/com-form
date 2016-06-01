import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import { LeftNav } from '../components';
import Theme from '../constants/theme';
import * as actionCreators from '../actions';
import { Announcement, Schedule, Members, Chat } from '../components/groupHub';
import configStore from '../store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';

class GroupHub extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);   
  }
  
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchGroups();
  }
  
  handleRequestChange(open) {
    this.setState({ open });
  }
  
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  
  render() {
    const { groups, actions } = this.props;
    
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

function mapStateToProps(state) {
  return {
    groups: state.groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

injectTapEventPlugin();

const GH = connect(mapStateToProps, mapDispatchToProps)(GroupHub);

render(
  <Provider store={ configStore() }>
    <GH />
  </Provider>,
  document.getElementById('root')
);

