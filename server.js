const webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config = require('./webpack.config');

const express = require('express'),
      app = express(),
      port = 3000,
      compiler = webpack(config);
      
const io = require('socket.io')(app);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, (err) => {
  err ? console.log(err) : console.log('listening port 3000')
})

io.on('connection', socket => {
  socket.emit('message', { connected: 'YES' })
  socket.on('disconnect', () => console.log('Disconnect!'))
})

