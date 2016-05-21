import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';
import session from 'express-session';
import compression from 'compression';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import renderHandler from './renderHandler';
import validator from './validator';
import socketIO from 'socket.io';

const app = express();
const port = 3000;

const server = http.Server(app);
const io = socketIO(http);

const DATA_FILE = path.join(__dirname, '..', 'data', 'initialState.json');

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'isomorphic', 'public', 'favicon', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(cors({origin: 'http://localhost:3000', methods: 'GET, PUT, POST'}));
app.use(express.static(path.join(__dirname, '..')));

app.use(session({
  secret: 'test com-from!!!',
  name: 'a session',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60
  }
}));

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'http://localhost:3001');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', renderHandler);

app.post('/login', validator);

app.get('/logout', (req, res) => {
   req.session.destroy(() => {
     req.session = null;
   })
});

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

var serverListener = server.listen(port, err => {
  err ? console.log(err) : console.log('listening port 3000') ;
});

io.listen(serverListener);
