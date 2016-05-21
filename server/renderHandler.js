import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/containers/app';
import Html from './Html'
import path from 'path';
import { readFile } from './promise-io';

function renderHandler(req, res) {
  if (__DEVELOPMENT__) {
    webpack_isomorphic_tools.refresh();
  }
  const memoryHistory = createMemoryHistory(req.originalUrl);
  
  readFile(path.join(__dirname, '..', 'data', 'initialState.json'))
    .then(data => JSON.parse(data))
    .then(initialState => {
      const store = configStore(initialState);
      
      match({ history, location: req.originalUrl }, (err, redirectLocation, renderProps) => {
        if (err) {
          console.error(`Router error: ${err}`);
          res.status(500);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          const layer = (
            <Provider store={store}>
              <App ua={req.headers['user-agent']} />
            </Provider>
          );
          
          res.status(200).send('<!DOCTYPE html>\n' +
            renderToString(
              <Html 
                assets={webpack_isomorphic_tools.assets()}
                layer={layer}
                initialState={store.getState()}
                />
            )
          );
        } else {
          res.status(400).send('Not found');
        }
      })
      

    })
    .catch(err => res.status(500).send(err));
}

export default renderHandler;
