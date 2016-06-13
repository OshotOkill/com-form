import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../constants/theme';
import * as cardActions  from '../actions/cardActions';
import { 
  Header, 
  LeftNav, 
  Content, 
  Footer, 
  Chat, 
} from '../components';

import '../public/css/global.css';
import '../public/css/materialdesignicons.min.css';


@connect(
  state => ({cards: state.cards}),
  cardActions)
class Home extends Component {
  
  state = {
    open: false,
    messages: []
  }
  
  static childContextTypes = {
    socket: React.PropTypes.object,
    Toggle: React.PropTypes.func
  }
  
  componentWillMount() {
    this.props.fetchData();
  }
  
  componentDidMount() {
    socket.on('message', data => console.log(data));
    
    socket.on('newMessage', text => {
      const messages = this.state.messages;
      messages.push(text);
      this.setState({ messages });
    })
  }
  
  getChildContext() {
    return {
      socket,
      Toggle: this.handleToggle
    }
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }
  
  handleRequestChange = open => {
    this.setState({ open });
  }
  
  render() {
    const { cards, count, actions } = this.props;
    console.log('rendered HOME!!');
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <Header />
          <LeftNav 
            open={ this.state.open } 
            requestChange={ this.handleRequestChange }
            />
          <Content cards={cards} actions={actions} />
          <Footer actions={actions} count={count} />
          <Chat messages={ this.state.messages } />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Home;
