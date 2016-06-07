import React, { Component } from 'react';
import Message from './components/message';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Chat extends Component {
  
  state = {
    value: ''
  }
  
  static contextTypes = {
    socket: React.PropTypes.object,
    Toggle: React.PropTypes.func
  }
  
  handleChange = e => {
    this.setState({value: e.target.value});
  }
  
  handleSubmit = () => {
    const { socket } = this.context;
    console.log(this.state.value);
    socket.emit('newMessage', this.state.value);
    this.setState({value: ''});
  }
  
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map(message =>
          <Message message={message} />
        )}
        <TextField id="received-message" value={ this.state.value } onChange={ this.handleChange } />
        <RaisedButton label="chat" onClick={ this.handleSubmit } />
      </div>
    )
  }
}

export default Chat;
