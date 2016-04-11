import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'

import { Header, AppLeftNav, Content, Footer } from '../components'
import Theme from '../constants/theme'
import * as actionCreators from '../actions'

import '../public/css/global.css'
import '../public/css/materialdesignicons.min.css'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRequestChange = this.handleRequestChange.bind(this)
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
          <AppLeftNav 
            open={ this.state.open } 
            requestChange={ this.handleRequestChange }
            />
          <Content cards={cards} actions={actions} />
          <Footer />
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