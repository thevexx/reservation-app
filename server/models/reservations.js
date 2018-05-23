  const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const User = new mongoose.Schema({
  idUser: {type: ObjectId,  ref: 'users'},
  idEcran: {type: ObjectId, ref:'ecrans'},
  dateRes: {
    type: Date,
    default: Date.now()
  },
  dateDebut: Date,
  dateFin: Date,
  dureSpot: {
    type: Number,
    min: 10,
    max: 20
  },
  etat: {
    type: String,
    enum: ['accepte', 'refused', 'en attente']
  }
});

module.exports = User;
