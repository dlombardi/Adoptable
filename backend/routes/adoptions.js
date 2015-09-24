'use strict';
var express = require('express');
var router = express.Router();
var fs = require("fs");

var Client = require('../models/clients');
var Pet = require('../models/pets');

router.get('/', function(req, res, next) {
  Client.find({}, function(err, client){
    res.send(client);
  });
});


router.put

module.exports = router;
