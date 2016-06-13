import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App, Home, Auth, GroupHub, UserHub } from './container';
import configStore from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

// function AuthEnter(nextState, replace, cb) {
  
// }

render(
  <Provider store={ configStore() }>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="auth" component={Auth} />
        <Route path="userhub" component={UserHub} />
        <Route path="grouphub" component={GroupHub} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
