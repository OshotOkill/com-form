var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
    
  entry: [
    './server/server'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    chunkFilename: '[name].[hash].js'
  },
  
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false,
    //   compress: {
    //     warning: false
    //   }
    // }),
  ],
    
  module: {
    loaders: [
      { test: /\.jsx?$/, include: __dirname + '/server', loader: 'babel' },
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