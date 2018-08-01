var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  console.log(req.body)

  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');

    var data_user = {
      date : req.body.date,
      location : req.body.location,
      time : req.body.time,
      title : req.body.title,
      city: req.body.city_specific
    }
    var data_city = {
      date : req.body.date,
      location : req.body.location,
      time : req.body.time,
      title : req.body.title,
      user : req.body.user
    }

    database.collection('user-data').update({username : req.body.user},{$push : {events : data_user}})
    database.collection('cities').update({city : req.body.city_specific},{$push : {events : data_city}})
  })
})


module.exports = router;
