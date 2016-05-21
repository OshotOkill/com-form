import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import App from '../isomorphic/containers/app';
import configStore from '../isomorphic/store';
import injectTapEventPlugin from 'react-tap-event-plugin';


global.socket = io('http://localhost:3000');

injectTapEventPlugin();

const ua = navigator.userAgent;
const initialState = window.__INITIAL_STATE__;
const store = configStore(initialState);

render(
  <Provider store={store}>
    <App ua={ua} />
  </Provider>,
  document.getElementById('root')
);
