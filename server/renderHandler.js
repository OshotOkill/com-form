import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/container/app';
import fs from 'fs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { readFile } from './promise-io';

import global from '../isomorphic/public/css/global.css';
import icons from '../isomorphic/public/css/materialdesignicons.min.css';

const assets = webpack_isomorphic_tools.assets();
// const styleSheets = Object.keys(assets.styles).map((styleLink, i) => {
//   return `
//     <link href=${styleLink} key=${i} rel="stylesheet" />
//   `
// });

// const styles = Object.keys(assets.styles).map((styleLink, i) => {
  
// })

function renderHandler(req, res, next) {
  // if (_development_) {
  //   webpack_isomorphic_tools.refresh();
  // }
  
  readFile(path.join(__dirname, '..', 'data', 'initialState.json'))
    .then(data => {
      const initialState = JSON.parse(data);
      const store = configStore(initialState);
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      res.send(renderPage(html, initialState));
      next();
    })
    .catch(err => console.error(err));
}

function renderPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>com-form</title>
        <style>
          ${global}
          ${icons}
        </style>
      </head>
      
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

export default renderHandler;
