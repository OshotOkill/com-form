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
      case 'id' : 
        this.setState({id: e.target.value}); 
        break;
      case 'password' : 
        this.setState({password: e.target.value}); 
        break;
    }
  }

  // handleClick = () => {
  //   fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: this.state.id,
  //       password: this.state.password
  //     })
  //   })
  //     .then(res => {
  //       if (res.status >= 400) {
  //         throw new Error('Connection failed');
  //       }
  //       return res.text();
  //     })
  //     .then(text => {
  //       if (text === 'success') {
  //         window.location.href = '/userhub';
  //       }
  //     })
  //     .catch(err => console.error(err));
    
  //   this.setState({
  //     id: '',
  //     password: ''
  //   })
  // }
  
  render() {
    return (
      <div style={{width: '960px', margin: '0 auto', padding: '50px'}}>
        <form action="/api/login" method="POST">
          <TextField 
            id="id"
            name="id"
            floatingLabelText="输入用户名"
            onChange={ this.handleChange }
            value={this.state.id} 
            />
          <br />
          <TextField 
            id="password" 
            name="password"
            type="password"
            floatingLabelText="输入密码" 
            onChange={ this.handleChange }
            value={this.state.password} 
            />
          <br />
          <br />
          <br />
          <RaisedButton 
            type="submit" 
            label="登录"

            />
        </form>
      </div>
    )
  }
}

export default Login;
