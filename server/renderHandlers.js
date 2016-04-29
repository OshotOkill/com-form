import fetch from 'isomorphic-fetch';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/container/app';

function renderHandler(req, res, next) {
  fetch('/isomorphic/data/initialState')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Data fetch failed');
      }
      return res.json();
    })
    .then(initialState => {
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
      </head>
      
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

module.exports = renderHandler;
