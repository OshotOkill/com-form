import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../ismorphic/containters/app';
import About from '../ismorphic/containers/about';

const Routes = (  
  <Route path="/" component={App} >
    <Route path="/about" component={About} />
  </Route>
);

export default Routes;
