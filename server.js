const webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config = require('./webpack.config'),
      compiler = webpack(config);

const express = require('express'),
      app = express(),
      port = 3000;
      
const http = require('http').Server(app),
      io = require('socket.io')(http),
      fs = require('fs'),
      path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/', express.static(path.join(__dirname)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', socket => {
  socket.emit('message', 'Socket.io standing by')
  
  socket.on('newMessage', message => {
    socket.emit('newMessage', message)          
  })
  
  socket.on('disconnect', () => console.log('Disconnect!'))
})

http.listen(port, err => {
  err ? console.log(err) : console.log('listening port 3000')
})
