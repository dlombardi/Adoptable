'use strict';

var Mongoose = require('mongoose');

var clientSchema = Mongoose.Schema({
  name: {type: String, required: true},
  email: String,
  Age: Number,
  Occuption: String,
  Description: String,
  pets: [{type: Mongoose.Schema.ObjectId, ref: 'Animal'}]
});

var Client = Mongoose.model('Client', clientSchema);

module.exports = Client;

// Client.findById(clientId, function(err, client){
//
// }).populate('pets');
//
// Client.findOne({.......}, funciton(err, client){
//   Animal.findOne({.....}, funciton(err, pet){
//     client.pets.push(pet._id);
//     pet.isAvailable = false;
//     client.save(function(err, savedClient){
//       pet.save(function(err, savedPet){
//         res.send();
//       });
//     })
//   });
// })
