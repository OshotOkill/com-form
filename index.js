import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './container/app'


injectTapEventPlugin();
render(<App />, document.getElementById('root'));

