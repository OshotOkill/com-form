var path = require('path');
var webpack = require('webpack');

module.exports = {
    
  entry: [
    './index'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  plugins: [
    new webpack.ProvidePlugin({ io: 'socket.io-client' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warning: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js')
  ],
    
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=4096' },
      { test: /\.svg/, loader: 'url?limit=4096' },
      { test: /\.(woff|eot|ttf|woff2)/, loader: 'url?limit=4096' }
    ]
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};