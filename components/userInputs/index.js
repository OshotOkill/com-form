import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Login from './login';
import Register from './register';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  tabs: {
    width: '960px',
    margin: '50px auto 0'
  },
  
  // content: {
  //   margin: '30px 70px'
  // }  
}

class UserInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }
  
  render() {
    return (
      <div>
        <Tabs style={styles.tabs} contentContainerStyle={styles.content} onChange={this.handleChange}
          value={this.state.slideIndex}>
          <Tab label="登录" value={0} />
          <Tab label="注册" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          >         
          <Login />
          <Register />
        </SwipeableViews>
      </div>
    )
  }
}

export default UserInput;