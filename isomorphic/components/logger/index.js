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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();

    fetch('/data/auth', {
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
        console.log(res.cookie)
        return res.json();
      })
      .then(loginUser => console.log(`${loginUser.username} login successful`))
      .catch(err => console.log(err));
    
    this.setState({
      username: '',
      password: ''
    });
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
              <RaisedButton label="submit" onClick={ this.handleSubmit } />
            </div>
          } 
          />
      </div>
    )
  }
}

export default UserSettings;
