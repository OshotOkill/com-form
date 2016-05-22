import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(e) {
    switch(e.target.id) {
      case 'user' : 
        this.setState({id: e.target.value}); 
        console.log(this.state.id);
        break;
      case 'password' : 
        this.setState({password: e.target.value}); 
        console.log(this.state.id);        
        break;
    }
  }
  
  handleClick() {
    this.setState({
      id: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div style={{width: '960px', margin: '0 auto', padding: '50px'}}>
        <TextField id="user" floatingLabelText="输入用户名" onChange={ this.handleChange } value={this.state.id} />
        <br />
        <TextField id="password" floatingLabelText="输入密码" onChange={ this.handleChange } value={this.state.password} />
        <br />
        <br />
        <br />
        <RaisedButton label="登录" onClick={ this.handleClick }/>
      </div>
    )
  }
}

export default Login;