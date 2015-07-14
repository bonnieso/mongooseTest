'use strict';

var mongoose = require('mongoose');

var toySchema = mongoose.Schema({
  kind: {type: String, required: true},
  hasBatteries: {type: Boolean, required: true}
});

var Toy = mongoose.model("Toy", toySchema);

module.exports = Toy;
