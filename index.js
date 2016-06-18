import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App, Home, Auth, GroupHub, UserHub } from './container';
import configStore from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


function isAuthorized(nextState, replace) {
  if (!!localStorage.token) {
    replace('/');
  }
}

function requireUserAuthorization(nextState, replace) {
  if (!localStorage.token) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

injectTapEventPlugin();

render(
  <Provider store={ configStore() }>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="auth" component={Auth} onEnter={isAuthorized} />
        <Route path="userhub" component={UserHub} onEnter={requireUserAuthorization} />
        <Route path="grouphub" component={GroupHub} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
