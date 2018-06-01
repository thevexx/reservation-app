const router = require('express').Router();
const mongoose = require('mongoose');
const Ecrans = require('../models/ecrans');

mongoose.connect('mongodb://localhost:27017/reservationDB');

const EcransModel = mongoose.model('ecrans', Ecrans);

router.get('/', async (req, res) => {
  const ecrans = await EcransModel.find().exec();
  res.send(ecrans);
});

router.get('/:id', async (req, res) => {
  const ecran = await EcransModel.findById(req.params.id).exec();
  res.send(ecran);
});

router.get('/delete/:id', async (req, res) => {
  const ecran = await EcransModel.deleteOne({_id:req.params.id}).exec();
  res.send(ecran);
});

router.post('/', async (req, res) => {
  await EcransModel(req.body).save(err => {
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
