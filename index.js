import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/app';
import configStore from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

render(
  <Provider store={ configStore() }>
    <App />
  </Provider>,
  document.getElementById('root')
);
