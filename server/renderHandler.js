import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/container/app';
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
      
      if (req.session.cookie) {
        console.log('have a cookie');
      }
      
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
