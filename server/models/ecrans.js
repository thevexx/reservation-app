const mongoose = require('mongoose');

const Ecran = new mongoose.Schema({
  name: String,
  pictureUrl: String,
  youtubeUrl: String,
  emplacementPhysique: String,
  emplacementGps: {
    latitude: String,
    longitude: String
  },
  dimensions: {
    longueur: String,
    largeur: String,
  },
  resolution: {
    longueur: String,
    largeur: String,
  },
  nSpotParIteration: {
    type: Number,
    max: 8,
    min: 0
  },
  prix: Number
});

module.exports = Ecran;
