const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studioSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: Object,
  },
  image: {
    type: String,
  }
});

const Studio = mongoose.model('Studio', studioSchema); // collection name 

module.exports = Studio;
