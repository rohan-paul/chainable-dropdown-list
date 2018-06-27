const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({

  name: String,
  carMake: String,
  model: String
});

module.exports = mongoose.model('car', CarSchema);