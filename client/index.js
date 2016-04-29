import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../isomorphic/container/app';
import configStore from '../isomorphic/store';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const initialState = window.__INITIAL_STATE__;
const store = configStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
