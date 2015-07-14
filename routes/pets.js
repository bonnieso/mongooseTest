var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = require('../models/pet')
var User = require('../models/user')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  console.log('req.body:', req.body);
  var pet = new Pet(req.body);
  console.log('pet:', pet);
  pet.save(function(err, savedPet){
    if(err){
      console.error(err);
    }
    console.log('savedPet:', savedPet);
    res.send();
  });
});

router.post('/adopt', function(req, res, next){
  User.findById(req.body.userId, function(err1, user){
    Pet.findById(req.body.petId, function(err2, pet){
      if(err1 || err2){
        console.log(err1, err2);
      }
      console.log('user:', user);
      console.log('pet:', pet);
      user.pets.push(pet._id);
      pet.owner = user._id;
      user.save(function(err, savedUser){
        pet.save(function(err, savedPet){
          console.log(savedUser);
          console.log(savedPet);
          res.send();
        });
      });
    });
  });
});

      // var id = mongoose.Types.ObjectId(req.body.petId);

module.exports = router;
