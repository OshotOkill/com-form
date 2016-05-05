var express = require('express');
var webpack = require('webpack');
var devConfig = require('./webpack.config.dev');

var app = express();
var port = 3000;
var compiler = webpack(webpackConfig);

var serverOptions = {
  noInfo: true,
  hot: true,
  publicPath: devConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
