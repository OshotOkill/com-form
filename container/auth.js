import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetch from 'isomorphic-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Theme from '../constants/theme';
import { LeftNav } from '../components'
import { Login, Register } from '../components/authorize';
import * as loginRegisterActions from '../actions/auth';
import SwipeableViews from 'react-swipeable-views';


const styles = {
  tabs: {
    width: '960px',
    margin: '200px auto 0'
  }
};


@connect(
  state => ({ user: state.user }),
  loginRegisterActions)
class Auth extends Component {
  
  state = {
    open: false,
    slideIndex: 0
  }

  handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  }
  
  handleRequestChange = open => {
    this.setState({ open });
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <AppBar 
            title="登录 & 注册" 
            titleStyle={{paddingLeft: 'calc(50% - 100px)', fontSize: '20px'}}
            onLeftIconButtonTouchTap={ this.handleToggle } 
            />
          <LeftNav 
            open={ this.state.open }
            requestChange={ this.handleRequestChange }
            />
          <div style={{background: '#eee'}}>
            <Tabs 
              style={styles.tabs}
              onChange={ this.handleChange }
              value={this.state.slideIndex}
              >
              <Tab label="登录" value={0} />
              <Tab label="注册" value={1} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={ this.handleChange }
              >
              <Login location={this.props.location} />
              <Register location={this.props.location} />
            </SwipeableViews>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Auth;
