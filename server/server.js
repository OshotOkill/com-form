import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';
import session from 'express-session';
import compression from 'compression'
import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
import renderHandler from './renderHandler';
import validator from './validator';
import socketIO from 'socket.io';

const app = express();
const port = 3000;

const server = http.Server(app);
// const io = socketIO(http);

const DATA_FILE = path.join(__dirname, '..', 'data', 'initialState.json');

app.use(compression());

app.use(cors({origin: 'http://localhost:3000', methods: 'GET, PUT, POST'}));

app.use(session({
  secret: 'test com-from',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 1
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(express.static(path.join(__dirname, '..')));
app.get('/', renderHandler);

app.post('/data/auth', validator);

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

// io.on('connection', socket => {
//   socket.emit('message', 'Socket.io standing by');

//   socket.on('newMessage', message => {
//     socket.emit('newMessage', message);
//   });

//   socket.on('disconnect', () => console.log('Disconnect!'));
// });

server.listen(port, err => {
  err ? console.log(err) : console.log('listening port 3000') ;
});
