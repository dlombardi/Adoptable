var express = require('express');
var router = express.Router();

var Client = require('../models/clients');
var Pet = require('../models/pets');


router.put('/:clientId/adopt/:animalId', function(req, res){
  Client.findById(req.params.clientId, function(err, client){
    Pet.findByID(req.params.animalId, function(err, pet){
      if(client.pets.indexOf(pet) !== -1){
        res.status(400).send("you already have this pet");
      } else {
        client.pets.push(pet._id);
        pet.isAvailable = false;
        client.save(function(err, savedClient){
          pet.save(function(err, savedPet){
            res.send(savedClient);
          });
        });
      }
    });
  });
});

router.put('/:clientId/unadopt/:animalId', function(req, res){
  Client.findById(req.params.clientId, function(err, client){
    Pet.findByID(req.params.animalId, function(err, pet){
      if(client.pets.indexOf(pet._id) === -1){
        res.status(400).send("client doesn't have that animal");
      } else {
        pet.isAvailable = true;
        client.pets.splice(client.pets.indexOf(pet._id), 1);
        client.save(function(err, savedClient){
          pet.save(function(err, savedPet){
            res.send(savedClient);
          });
        });
      }
    });
  });
});


/* GET home page. */
router.get('/:ClientId', function(req, res, next){
  Client.findById(req.params.ClientId, function(err, client){
    res.send(client);
  });
});

router.get('/', function(req, res, next) {
  Client.find({}, function(err, client){
    res.send(client);
  });
});

router.post('/', function(req, res, next){
  console.log(req.body)
  Client.create(req.body, function(err, client){
    res.status(err ? 400 : 200).send(err || client);
  });
});

// router.put('/', function(req, res, next){
//   Client.update({isAvailable: req.body.isAvailable}, {$set: {isAvailable: false}}, function(err, pet){
//     res.send(pet);
//   });
// });

router.delete('/', function(req, res, next){
  Client.findByIdAndRemove(req.body.id, function(err, pet){
    res.send(pet);
  });
});

module.exports = router;
