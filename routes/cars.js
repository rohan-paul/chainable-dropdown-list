var express = require('express');
var router = express.Router();
const Car = require('../models/Car');
const mongoose = require('mongoose');

var app = express();

/* GET cars listing. */

router.get('/', (req, res) => {
  Car.find({}, (err, listOfCars) => {
    if (err) throw err;
    res.json(listOfCars)
  })
});

router.post('/', (req, res) => {
  let car = new Car();

  car.name = req.body.name;
  car.carMake = req.body.carMake;
  car.model = req.body.model

  car.save(err => {
      if(err) throw err;
      res.json({"Status" : "Success"});
  });
});

module.exports = router;