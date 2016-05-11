#!/usr/bin/env node
require('../server.babel');

// require('babel-register');
console.log('building server bundle');

var path = require('path');
var webpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpack_isomorphic_tools = new webpackIsomorphicTools(require('../webpack-isomorphic-config'))
  .development(process.env.NODE_ENV === 'devlopment')
  .server(path.join(__dirname, '..'), () => require('./server'));
