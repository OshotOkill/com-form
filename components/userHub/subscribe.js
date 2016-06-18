import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { indigo600, transparent } from 'material-ui/styles/colors'


class Subscribe extends Component {
  render() {
    return (
      <div style={{margin: '50px auto'}}>
        <List>
          <ListItem primaryText="已订阅群组" />
          <Divider />
          <ListItem         
            leftAvatar={
              <Avatar
                color={indigo600}
                backgroundColor={transparent}
                style={{left: 5}}
                >
                网
              </Avatar> 
            } 
            primaryText="网工一班" />  
          <Divider inset={true} />
          <ListItem insetChildren={true} primaryText="网工二班" />  
          <Divider inset={true} />
          <ListItem insetChildren={true} primaryText="网工三班" />  
        </List>
      </div>
    )
  }
}

export default Subscribe;
