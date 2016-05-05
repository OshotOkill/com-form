var path = require('path');
var webpack = require('webpack');
var webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
// import path from 'path';
// import webpack from 'webpack';
// import webpack_isomorphic_tools_plugin from 'webpack-isomorphic-tools/plugin'

// webpack_isomorphic_tools_plugin = new webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-config'))
//                                     .development();

// export default {
module.exports = {
  
  devtool: 'eval-source-map',
  context: __dirname,
    
  entry: [
    'webpack-hot-middleware/client',
    './client/index',
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/static/'
  },
    
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json-loader'},
      { test: webpack_isomorphic_tools_plugin.regular_expression('styles'), loader: 'style!css' },
      { test: webpack_isomorphic_tools_plugin.regular_expression('images'), loader: 'url-loader?limit=10240'},
      { test: webpack_isomorphic_tools_plugin.regular_expression('fonts'), loader: 'url?limit=10240' }
    ]
  },
  
  plugins: [
    new webpack.ProvidePlugin({ io: 'socket.io-client' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-config')).development(),
  ],
  
  progress: true,
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};