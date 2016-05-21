import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { createMemoryHistory } from 'history';
import configStore from '../isomorphic/store';
import App from '../isomorphic/containers/app';
import Html from './Html'
import path from 'path';
import { readFile } from './promise-io';

function renderHandler(req, res) {
  if (__DEVELOPMENT__) {
    webpack_isomorphic_tools.refresh();
  }

  readFile(path.join(__dirname, '..', 'data', 'initialState.json'))
    .then(data => JSON.parse(data))
    .then(initialState => {
      const store = configStore(initialState);
      const layer = (
        <Provider store={store}>
          <App ua={req.headers['user-agent']} />
        </Provider>
      );
      
      // if (req.session.visit) {
      //   req.session.visit++;
      //   console.log('visit ' + req.session.visit + ' times');
      // } else {
      //   req.session.visit = 1;
      //   console.log('first time visit this page');
      // }
      // if (req.session.user) {
      //   console.log(user.username + 'logged in');
      // } else {
      //   console.log('no user logged in');
      // }
      
      res.status(200).send('<!DOCTYPE html>\n' +
        renderToString(
          <Html 
            assets={webpack_isomorphic_tools.assets()}
            layer={layer}
            initialState={store.getState()}
            />
        )
      );
    })
    .catch(err => res.status(500).send(err));
}

export default renderHandler;
