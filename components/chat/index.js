import React, { Component } from 'react'
import Message from './components/message'

class Chat extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          <Message key={message.id} text={message.text} />
        })}
      </div>
    )
  }
}

export default Chat