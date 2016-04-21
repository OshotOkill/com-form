var path = require('path')
var webpack = require('webpack')

module.exports = {
  
  devtool: 'source-map',
    
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
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
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}