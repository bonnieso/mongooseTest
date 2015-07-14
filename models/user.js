'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  pets: [{type: mongoose.Schema.ObjectId}]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
