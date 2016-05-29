import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Hub from './hub';

const styles = {
  header: {
    
  },
  
  subheader: {
    width: '25%',
  },
  
  title: {
    margin: '0 auto'    
  }
}

class UserHub extends Component {
  constructor(props, context) {
    super(props, context);
    
  }
  
  render() {
    return (
      <div>
        <AppBar title="Norn" titleStyle={styles.title} />
        <AppBar showMenuIconButton={false} title={<Avatar src="../../public/imgs/avatar.png" />} zDepth={0} />
        <Hub />
      </div>
    )
  }
}

export default UserHub;
