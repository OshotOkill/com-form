import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <Paper>
        {message}
      </Paper>
    )
  }
}

export default Message;
