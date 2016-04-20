const webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config = require('./webpack.config');

const express = require('express'),
      app = express(),
      port = 3000,
      compiler = webpack(config);
      
const http = require('http').Server(app),
      fs = require('fs'),
      io = require('socket.io')(http);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

http.listen(port, err => {
  err ? console.log(err) : console.log('listening port 3000')
})

io.on('connection', socket => {
  socket.emit('message', 'Socket.io standing by')
  
  socket.on('newMessage', message => {
    socket.emit('newMessage', message)
  })
  
  socket.on('disconnect', () => console.log('Disconnect!'))
})

