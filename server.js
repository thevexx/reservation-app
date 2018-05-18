const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
const listuser=require('./server/routing/listuser');
const auth = require('./server/routing/auth');
const ecrans = require('./server/routing/ecrans');
const reservations = require ('./server/routing/reservations');
app.use('/api/listuser', listuser);
app.use('/api/reservations',reservations);
app.use('/auth', auth);
app.use('/api/ecrans', ecrans);
// app.get('/api/users', (req, res) => {
//   res.send('users');
// })

app.listen(3000, err => {
  console.log('server is running on port 3000')
});
