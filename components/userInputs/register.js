import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const initalState = {
  id: '',
  password: '',
  email: '',
  phone: '',
  errors: {
    id: '',
    password: '',
    email: '',
    phone: ''
  }
}

class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initalState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    
    switch(id) {
      case 'user':
        this.setState({ id: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
      case 'email':
        this.setState({ email: value });
        break;
      case 'phone':
        this.setState({ phone: value });
        break;
    }
  }
  
  handleBlur(e) {
    const targetId = e.target.id;
    const value = e.target.value;
    const { id, password, email, phone } = this.state.errors;    
    // a really painful merge at here
    switch(targetId) {
      case 'user':
        if (value.length < 4)          
          this.setState({ errors: { id: 'must longer than 4', password, email, phone } });
        else 
          this.setState({ errors: { id: '', password, email, phone } })
        break;
      case 'password':
        if (value.length < 6)
          this.setState({ errors: { id, password: 'must longer than 6', email, phone } });
        else 
          this.setState({ errors: { id, password: '', email, phone } })
        break;
      case 'email':
        break;
      case 'phone':
        if (value.length !== 11)
          this.setState({ errors:{ id, password, email, phone: 'wrong phone number' } });
        else 
          this.setState({ errors: { id, password, email, phone: '' } })
        break;
    }
  }
  
  handleClick() {
    this.handleReset();
  }
  
  handleReset() {
    this.setState(initalState);
  }
  
  render() {
    return (
      <div style={{width: '960px', margin: '0 auto', padding: '50px'}}>
        <TextField 
          id="user" 
          floatingLabelText="请输入用户名" 
          errorText={ this.state.errors.id }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          value={this.state.id} 
          />
        <br />
        <TextField 
          id="password"
          type="password"
          floatingLabelText="请输入密码" 
          errorText={ this.state.errors.password }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          value={this.state.password} 
          />
        <br />
        <TextField
          id="email"
          floatingLabelText="请输入邮箱"
          errorText={ this.state.errors.email }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }          
          value={this.state.email} 
          />
        <br />
        <TextField
          id="phone"
          floatingLabelText="请输入手机号"
          errorText={ this.state.errors.phone }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          value={this.state.phone}
          />
        <br />
        <br />
        <br />
        <RaisedButton label="注册" onClick={ this.handleClick }></RaisedButton> 
        {''}
        <RaisedButton label="重置" onClick={ this.handleReset }></RaisedButton>
      </div>
    )
  }
}

export default Register;
