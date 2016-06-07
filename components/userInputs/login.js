import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fetch from 'isomorphic-fetch';

class Login extends Component {

  state = {
    id: '',
    password: ''
  }
    
  handleChange = e => {
    switch(e.target.id) {
      case 'user' : 
        this.setState({id: e.target.value}); 
        break;
      case 'password' : 
        this.setState({password: e.target.value}); 
        break;
    }
  }
  
  handleClick = () => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        password: this.state.password
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.text();
      })
      .then(text => {
        if (text === 'success') {
          window.location.href = '/userhub';
        }
      })
      .catch(err => console.error(err));
    
    this.setState({
      id: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div style={{width: '960px', margin: '0 auto', padding: '50px'}}>
        <TextField 
          id="user"
          floatingLabelText="输入用户名"
          onChange={ this.handleChange }
          value={this.state.id} 
          />
        <br />
        <TextField 
          id="password" 
          type="password"
          floatingLabelText="输入密码" 
          onChange={ this.handleChange }
          value={this.state.password} 
          />
        <br />
        <br />
        <br />
        <RaisedButton label="登录" onClick={ this.handleClick }/>
      </div>
    )
  }
}

export default Login;
