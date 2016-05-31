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

app.get('/data/initialState/users', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    const secureState = state.user.map(u => delete u.password);
    res.json(secureState);
  });
})

app.post('/data/initialState/users/changeUserInfo', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    state.user.forEach(user => {
      if (user.id === req.body.user.id) {
        Object.assign(user, req.body.user);
      }
    });
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      const secureState = state.user.map(u => delete u.password);
      res.json(secureState);
    });
  })
})

app.post('/data/initialState/users/addUserSubscribe', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    const { id, groupName } = req.body.subscribe; 

    state.user.forEach(user => {
      if (user.id === id) {
        if (user.subscribes.every(v => v !== groupName)) {
          user.subscribes.push(groupName);
        }
      }
    });
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      const secureState = state.user.map(u => delete u.password);
      res.json(secureState);
    });
  })  
})

app.post('/data/initialState/users/addSchedule', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    const { id, text } = req.body.schedule; 

    state.user.forEach(user => {
      if (user.id === id) {
        if (user.subscribes.every(v => v !== groupName)) {
          user.subscribes.push(groupName);
        }
      }
    });
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      const secureState = state.user.map(u => delete u.password);
      res.json(secureState);
    });
  })    
})

app.get('/data/initialState/groups', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    res.json(state.groups);
  });
})

app.post('/data/initialState/groups/addGroup', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    state.groups.push(req.body.group);
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(state.groups);
    });
  })
})

app.post('/data/initialState/groups/addGroupAnnouncement', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    const { groupName, text } = req.body.anno;
    state.groups.forEach(group => {
      if (group.name === groupName) {
        group.announcement = text;
      }
    })
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(state.groups);
    })
  })
})

app.post('/data/initialState/groups/addSchedule', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      console.error('POST ERROR:', err);
      process.exit(1);
    }
    const state = JSON.parse(data);
    const { groupName, text } = req.body.schedule;
    state.groups.forEach(group => {
      if (group.name === groupName) {
        group.schedule.push(text);
      }
    });
    
    fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(state.groups);
    });
  })  
})

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
