import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/container/app';
import Html from './Html'
import path from 'path';
import { readFile } from './promise-io';


function renderHandler(req, res, next) {
  if (__DEVELOPMENT__) {
    webpack_isomorphic_tools.refresh();
  }
  
  global.navigator = {userAgent: 'all'};

  readFile(path.join(__dirname, '..', 'data', 'initialState.json'))
    .then(data => {
      const initialState = JSON.parse(data);
      const store = configStore(initialState);
      const layer = (
        <Provider store={store}>
          <App />
        </Provider>
      );
      res.status(200).send('<!DOCTYPE html>\n' +
        renderToString(<Html assets={webpack_isomorphic_tools.assets()} layer={layer} initialState={store.getState()} />));
        
      next();
    })
    .catch(err => console.error(err));
}

export default renderHandler;
