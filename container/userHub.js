import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Theme from '../constants/theme';
import * as actionCreators from '../actions';

import configStore from './store';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Hub from '../components/userInput';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';

const styles = {
  header: {
    
  },
  
  subheader: {
    width: '25%',
  },
  
  title: {
    margin: '0 auto'    
  }
}

class UserHub extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <AppBar title="Norn" titleStyle={styles.title} />
          <AppBar showMenuIconButton={false} title={<Avatar src="../../public/imgs/avatar.png" />} zDepth={0} />
          <Hub />
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
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

injectTapEventPlugin();

render(
  <Provider configStore={ configStore() }>
    connect(mapStateToProps, mapDispatchToProps)(UserHub)
  </Provider>,
  document.getElementById('root')
);
