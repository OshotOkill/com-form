import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      value: e.target.value
    });   
  }
  
  handleClick(e) {
    if (!this.state.value) {
      return;
    }
    const { actions, count } = this.props;
    
    const cardConfigs = {
      id: count,
       
      cardHeader: {
        title: this.state.value,
        subtitle: this.state.value,
        avatar: ''
      },
      
      cardMedia: {
        overlay: {
          title: this.state.value,
          subtitle: this.state.value,
          imageURL: '/isomorphic/public/imgs/01.jpg'
        }
      },
      
      cardText: this.state.value,
      
      cardAction: 'hello'
    };

    actions.postData(cardConfigs);
    
    this.setState({
      value: ''
    });
  }
  
  render() {
    const { actions } = this.props;
    
    return (
      <div> 
        <AppBar iconElementLeft={
            <div>
              <TextField value={this.state.value} onChange={this.handleChange} />
              <RaisedButton label='submit' onClick={this.handleClick} />
            </div>
          } 
          />
      </div>
    )
  }
}

export default Footer;