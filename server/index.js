require('babel-register');
var webpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpack_isomorphic_tools = new webpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
  .development(process.env.NODE_ENV === 'devlopment')
  .server(__dirname, () => require('./server'));
