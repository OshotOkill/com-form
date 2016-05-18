export default function login(req) {
  return new Promise((resolve, reject) => {
    const user = { username: req.body.username };
    req.session.user = user;
    resolve(user);
  })
}