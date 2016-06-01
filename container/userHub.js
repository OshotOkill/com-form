import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Theme from '../constants/theme';
import * as actionCreators from '../actions';

import configStore from '../store';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { LeftNav } from '../components';
import Hub from '../components/userHub';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../public/css/global.css';

const styles = {
  header: {
    
  },
  
  subheader: {
    width: '25%',
  },
  
  title: {
   paddingLeft: '20px' 
  }
}

class UserHub extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  componentDidMount() {
    const { user, actions } = this.props;
    actions.fetchUserInfo('Norn');
  }
  
  handleRequestChange(open) {
    this.setState({ open });
  }
  
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
    
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <AppBar 
            title="Norn" 
            titleStyle={styles.title} 
            onLeftIconButtonTouchTap={ this.handleToggle }
            />
          <AppBar 
            showMenuIconButton={false} 
            style={{paddingLeft: 0, width: '100px', margin: '40px auto', background: '#fff'}}
            title={<Avatar src="../../public/imgs/avatar.png" size={100}/>} 
            titleStyle={{overflow: 'visible'}}
            zDepth={0} 
            />
          <LeftNav 
            open={ this.state.open }
            requestChange={ this.handleRequestChange }
            />
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
const UH = connect(mapStateToProps, mapDispatchToProps)(UserHub);

render(
  <Provider store={ configStore() }>
    <UH />
  </Provider>,
  document.getElementById('root')
);
