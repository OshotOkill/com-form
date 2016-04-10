import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store'
import App from './container/app'
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()

render(
  <Provider store={ configStore(store) }>
    <App />
  </Provider>, 
  document.getElementById('root')
)


