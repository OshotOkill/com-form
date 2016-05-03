var path = require('path');
var webpack = require('webpack');

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
  
  plugins: [
    new webpack.ProvidePlugin({ io: 'socket.io-client' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
  
  progress: true,
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};