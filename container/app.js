import React, { Component } from 'react';
import io from 'socket.io-client';

global.socket = io();

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
