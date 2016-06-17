import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Theme from '../constants/theme';
import * as userActions from '../actions/userActions';
import { LeftNav } from '../components';
import Hub from '../components/userHub';


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

@connect(
  state => ({ user: state.user }),
  userActions)
@withRouter
class UserHub extends Component {
  
  state = { open: false }
  
  componentWillMount() {
    this.props.fetchUserInfo('Norn');
  }
  
  handleRequestChange = open => {
    this.setState({ open });
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleLogOut = () => {
    const { router } = this.props;
    delete localStorage.id;
    delete localStorage.token;
    router.push('/auth');
  }
    
  render() {
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <AppBar 
            title="Norn" 
            titleStyle={styles.title} 
            onLeftIconButtonTouchTap={ this.handleToggle }
            iconElementRight={
              <RaisedButton 
                label="注销" 
                onClick={this.handleLogOut}
                />
            }
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

export default UserHub;
