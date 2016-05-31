import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Theme from '../constants/theme';
import * as actionCreators from '../actions';
import { Announcement, Schedule, Members } from '../components/groupHub';
import configStore from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';

class GroupHub extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <Announcement />
          <Schedule />
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

render(
  <Provider configStore={ configStore() }>
    connect(mapStateToProps, mapDispatchToProps)(GroupHub)
  </Provider>,
  document.getElementById('root')
);

