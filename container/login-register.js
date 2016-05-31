import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../constants/theme';
import * as actionCreators from '../actions';

import configStore from './store';
import { Login, Register } from '../components/userInputs';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';


const styles = {
  tabs: {
    width: '960px',
    margin: '50px auto 0'
  }
};

class UserInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <Tabs 
            style={styles.tabs}
            onChange={this.handleChange}
            value={this.state.slideIndex}
            >
            <Tab label="登录" value={0} />
            <Tab label="注册" value={1} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            >         
            <Login />
            <Register />
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators)
  }
}

injectTapEventPlugin();

render(
  <Provider configStore={ configStore() }>
    connect(mapStateToProps, mapDispatchToProps)(UserHub)
  </Provider>,
  document.getElementById('root')
);
