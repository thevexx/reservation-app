const router = require('express').Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Users = require('../models/users');

mongoose.connect('mongodb://localhost:27017/reservationDB');

const UsersModel = mongoose.model('users', Users);

router.post('/login', (req, res) => {

  UsersModel.findOne({
    email: req.body.email
  }, (err, result) => {
    console.log(result);
    if (result) {
      if (req.body.password == result.password) {
        const token = jwt.sign(result.toJSON(), 'my_pass');
        res.send({
          message: 'ok',
          token: token
        });
      } else {
        res.send({
          message: 'wrong password'
        });
      }
    } else {
      res.send({
        message: 'user not found'
      });
    }

  })
});

router.post('/register', async (req, res) => {
  await UsersModel(req.body).save(err => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        message: 'ok'
      });
    }
  });
});

module.exports = router;
