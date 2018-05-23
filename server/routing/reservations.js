const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/reservationDB', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('reservationDB');
    closure(db);
  })
}

const mongoose = require('mongoose');
const Reservations = require('../models/reservations');

mongoose.connect('mongodb://localhost:27017/reservationDB');

const ReservationsModel = mongoose.model('reservations', Reservations);

router.get('/', async (req, res) => {
  const reservations = await ReservationsModel.find().populate("users idUser", {
    name: 1,
    lastname: 1
  }).populate("ecrans idEcran", {
    name: 1
  }).exec();
  res.send(reservations);
})

router.post('/', async (req, res) => {
  await ReservationsModel(req.body).save(err => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        message: 'ok'
      });
    }
  });
})

router.get('/:id', async (req, res) => {
  const reservation = await ReservationsModel.findById(req.params.id).populate("users idUser", {
    name: 1,
    lastname: 1
  }).populate("ecrans idEcran", {
    name: 1
  }).exec();
  res.send(reservation);
})

router.get('/byUser/:id', async (req,res) => {
  const reservations = await ReservationsModel.find({idUser: req.params.id}).populate("ecrans idEcran", {
    name: 1
  }).exec();
  res.send(reservations);
})

router.put('/:id', async (req, res) => {
  const reservation = await ReservationsModel.findByIdAndUpdate(req.params.id,{$set: {etat: req.body.etat }}).exec().then();
  res.send(reservation);
})

module.exports = router;
