const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({

  name: String,
  carMake: String,
  model: String
});

module.exports = mongoose.model('car', CarSchema);