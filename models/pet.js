'use strict';

var mongoose = require('mongoose');

var petSchema = mongoose.Schema({
  name: {type: String, required: true},
  kind: {type: String, required: true},
  age: {type: Number, required: true},
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

var Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
