#!/usr/bin/env node
require('../server.babel');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

console.log('building server bundle');

var path = require('path');
var webpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpack_isomorphic_tools = new webpackIsomorphicTools(require('../webpack-isomorphic-config'))
  .development(__DEVELOPMENT__)
  .server(path.join(__dirname, '..'), () => require('./server'));
