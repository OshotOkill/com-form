import React, { Component } from 'react';
import Message from './components/message';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  handleSubmit() {
    // const { socket } = this.context;
    // console.log(this.state.value);
    // socket.emit('newMessage', this.state.value);
    // this.setState({value: ''});
  }
  
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map(message =>
          <Message message={message} />
        )}
        <TextField value={ this.state.value } id="chat" onChange={ this.handleChange } />
        <RaisedButton label="chat" onClick={ this.handleSubmit } />
      </div>
    )
  }
}

Chat.contextTypes = {
  socket: React.PropTypes.object,
  Toggle: React.PropTypes.func
}

export default Chat;