var express = require('express');
var router = express.Router();

var Pet = require('../models/pets');

/* GET home page. */
router.get('/', function(req, res, next) {
  Pet.find({}, function(err, pets){
    res.send(pets);
  });
});

router.post('/', function(req, res, next){
  console.log(req.body)
  Pet.create(req.body, function(err, pets){
    res.status(err ? 400 : 200).send(err || pets);
  });
});

router.put('/', function(req, res, next){
  Pet.update({isAvailable: req.body.isAvailable}, {$set: {isAvailable: false}}, function(err, pet){
    res.send(pet);
  });
});

router.delete('/', function(req, res, next){
  Pet.findByIdAndRemove(req.body.id, function(err, pet){
    res.send(pet);
  });
});

module.exports = router;
