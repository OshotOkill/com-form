import React, { Component } from 'react'
import Paper from 'material-ui/Paper'


class Message extends Component {
  render() {
    const { text } = this.props
    return (
      <Paper>
        {text}
      </Paper>
    )
  }
}

export default Message