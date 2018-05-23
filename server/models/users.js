const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  cin: {
    type: String,
    maxlength: 8
  },
  tel: Number,
  adresse: String,
  entreprise: String,
  position: String,
  role: {
    type: String,
    enum: ['admin', 'mod', 'user']
  },
});

module.exports = User;
