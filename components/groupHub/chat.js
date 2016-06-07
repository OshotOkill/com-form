import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Chat extends Component {
  
  state = { value: '' }
  
  handleChange = e => {
    this.setState({value: e.target.value});
  }
  
  handleSubmit = () => {
    // const { socket } = this.context;
    // console.log(this.state.value);
    // socket.emit('newMessage', this.state.value);
    // this.setState({value: ''});
  }
  
  render() {
    const { messages } = this.props;
    
    return (
      <div style={{width: '560px'}}>
        <List 
          style={{
            height: '650px', 
            border: '1px solid #eee', 
          }}
          >
          {messages.map(message => (
            <div key={message.text}>
              <ListItem 
                primaryText={message.text}
                leftAvatar={<Avatar src="../../public/imgs/avatar.png" />}
                />
              <Divider inset={true} />
            </div>
          ))}
       
        </List>
        <div>
          <TextField 
            id="chating" 
            hintText="说点什么" 
            style={{margin: '0 10px 0 200px'}} 
            value={ this.state.value } 
            onChange={ this.handleChange }
            />
          {' '}
          
          <RaisedButton label="发送" onClick={ this.handleSubmit }/>
        </div>
      </div>
    )
  }
}

export default Chat;
