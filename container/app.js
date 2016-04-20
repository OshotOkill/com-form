import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Header, LeftNav, Content, Footer, Chat } from '../components'
import Theme from '../constants/theme'
import * as actionCreators from '../actions'

import io from 'socket.io-client'
import '../public/css/global.css'
import '../public/css/materialdesignicons.min.css'


class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false,
      messages: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRequestChange = this.handleRequestChange.bind(this)
  }
  
  componentDidMount() {
    this.socket = io()
    
    this.socket.on('message', data => console.log(data))
    
    this.socket.on('newMessage', message => {
      console.log('success')
      this.setState({
        message: this.state.message.push(message)
      })
    })
  }
  
  getChildContext() {
    return {
      Toggle: this.handleToggle
    }
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }
  
  handleRequestChange(open) {
    this.setState({ open })
  }
  
  render() {
    const { cards, actions } = this.props
    
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <Header />
          <LeftNav 
            open={ this.state.open } 
            requestChange={ this.handleRequestChange }
            />
          <Content cards={cards} />
          <Footer actions={actions} />
          {/* <Chat messages={ this.state.messages } />*/}
        </div>
      </MuiThemeProvider>
    )
  }
}

App.childContextTypes = {
  Toggle: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)