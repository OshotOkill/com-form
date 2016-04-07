import React, { Component } from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'

import { Header, AppLeftNav, Content } from '../components'
import Theme from '../constants/theme'

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
    return (
      <MuiThemeProvider muiTheme={ Theme }>
        <div>
          <Header />
          <AppLeftNav 
            open={ this.state.open } 
            requestChange={ this.handleRequestChange }
            />
          <Content />
        </div>
      </MuiThemeProvider>
    )
  }
}

App.childContextTypes = {
  Toggle: React.PropTypes.func
}

export default App