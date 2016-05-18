import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fetch from 'isomorphic-fetch';

class UserSettings extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  
  handleLogin(e) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('login failed');
        }
        return res.json();
        // res.status >= 400 ? throw new Error('login failed') : res.json() ;
      })
      .then(loginUser => console.log(`${loginUser.username} login successful`))
      .catch(err => console.log(err));
    
    this.setState({
      username: '',
      password: ''
    });
  }
  
  handleLogout() {
    fetch('/logout')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('login failed');
        }
        return res.text();
      })
      .then(logoutText => console.log('Log out'))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <AppBar 
          iconElementLeft={
            <div>
              <TextField value={this.state.username} id="username" onChange={ this.handleUsername } />
              <TextField value={this.state.password} id="password" onChange={ this.handlePassword } />
            </div>
          }
          iconElementRight={
            <div>
              <RaisedButton label="login" onClick={ this.handleLogin } />
              <RaisedButton label="logout" onClick={ this.handleLogout } />
            </div>
          } 
          />
      </div>
    )
  }
}

export default UserSettings;
