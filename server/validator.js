import path from 'path';
import { readFile } from './promise-io';

function validator(req, res) {
  if (__DEVELOPMENT__) {
    webpack_isomorphic_tools.refresh();
  }
  const { username, password } = req.body;
  
  readFile(path.join(__dirname, '..', 'data', 'auth.json'))
    .then(data => JSON.parse(data))
    .then(users => {
      if (isValid(users, username, password)) {
        const user = { username, password };
        req.session.user = user;
        return user;
      }
      else throw new Error('login failed');
    })
    .then(user => res.json(user))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
}

function isValid(users, ...props) {
  const [ username, password ] = props;
  return users.some(user => 
    user.username === username && user.password === password);
}

export default validator;
