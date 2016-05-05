import path from 'path';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from '../isomorphic/store';
import App from '../isomorphic/container/app';
import { readFile } from 'promoise-io';


function renderHandler(req, res, next) {
  // if (_development_) {
  //   webpack_isomorphic_tools.refresh();
  // }
  
  readFile(path.join(__dirname, '..', 'isomorphic', 'data', 'initialState.json'))
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

export default renderHandler;
