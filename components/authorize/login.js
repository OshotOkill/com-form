import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fetch from 'isomorphic-fetch';


@withRouter
class Login extends Component {

  state = {
    id: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { location, router } = this.props;
    const { id, password } = this.state;

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Accept-Encoding': 'gzip, deflate'
      },
      body: JSON.stringify({
        id,
        password
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(data => {
        console.log(this.props.location)
        localStorage.id = data.id;
        localStorage.token = data.token;
        location.state && location.state.nextPathname ?
          router.replace(location.state.nextPathname) :
          router.replace('/');
      })
      .catch(err => console.error(err));
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
  
  render() {
    return (
      <div style={{width: '960px', margin: '0 auto', padding: '50px'}}>
        <form action="/api/login" method="POST" onSubmit={this.handleSubmit} >
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
