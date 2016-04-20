import React, { Component } from 'react'
import Message from './components/message'
import TextField from 'material-ui/TextField'

class Chat extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  
  handleSubmit(e) {
    socket.emit('newMessage', this.state.value)
    this.setState({value: ''})
  }
  
  render() {
    const { messages } = this.props
    
    return (
      <div>
        {messages.map(message => {
          <Message message={message} />
        })}
        <TextField value={ this.state.value } onChange={ this.handleChange }/>
      </div>
    )
  }
}

export default Chat