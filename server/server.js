import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devConfig from '../webpack.config.dev';
import express from 'express';
import HTTP from 'http';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import renderHandler from './renderHandlers';
import socketIO from 'socket.io';

const compiler = webpack(devConfig);
const app = express();
const port = 3000;

const http = HTTP.Server(app);
const io = socketIO(http);

const DATA_FILE = path.join(__dirname, '..', 'isomorphic', 'data', 'initialState.json');

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(renderHandler);

app.get('/isomorphic/data/initialState', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/isomorphic/data/initialState', (req, res) => {
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
