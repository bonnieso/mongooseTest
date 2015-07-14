var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Toy = require('../models/toy');

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id).populate('pets').exec(function(err, user){
    console.log(user);
    res.send(user);
  });
});

router.post('/', function(req, res, next){
  var user = new User(req.body);
  console.log('user:', user);
  user.save(function(err, savedUser){
    console.log('savedUser:', savedUser);
    res.send();
  });
});

router.post('/:id/toy', function(req, res, next){
  User.findById(req.params.id, function(err, user){
    var toy = new Toy(req.body);
    user.pets.push(toy._id);
    user.save(function(err, savedUser){
      res.send(savedUser);
    });
  });
});

module.exports = router;
