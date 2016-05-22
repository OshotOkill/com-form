const webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      devConfig = require('./webpack.config.dev'),
      compiler = webpack(devConfig);

const express = require('express'),
      app = express(),
      port = 3000;

const http = require('http').Server(app),
      io = require('socket.io')(http),
      fs = require('fs'),
      path = require('path'),
      compression = require('compression'),
      multer = require('multer'),
      favicon = require('serve-favicon'),
      session = require('express-session');

const bodyParser = require('body-parser');

const DATA_FILE = path.join(__dirname, 'data', 'initialState.json');

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(compression());
// app.use(favicon(path.join(__dirname, '..', 'isomorphic', 'public', 'favicon', 'favicon.ico')));
app.use(session({
  secret: 'test com-from!!!',
  name: 'a session',
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/about.html`);
})

app.get('/data/initialState', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/data/initialState', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERRROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    state.cards.push(req.body.cardConfigs);
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
});

io.on('connection', socket => {
  socket.emit('message', 'Socket.io standing by');

  socket.on('newMessage', message => {
    socket.emit('newMessage', message);
  });

  socket.on('disconnect', () => console.log('Disconnect!'));
});

http.listen(port, err => {
  err ? console.log(err) : console.log('listening port 3000') ;
});
