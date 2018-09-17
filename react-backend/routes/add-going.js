var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  mClient.connect(connect.mongo.url,function(error,client) {
    var id = req.body.id
    var database = client.db('pinterest-clone');
    database.collection('user-data').find({username : req.body.user}).toArray(function(error,data) {
      if(error)throw error;
      if(data[0].going.indexOf(req.body.id) == -1) {
        database.collection('user-data').update({username : req.body.user},{$push : {going : id}})
      }
      console.log(database.collection('cities').aggregate([{$match : {city: req.body.city}},{$unwind : "$events"},{$match : {code: req.body.id}}]))
    })
  })
})


module.exports = router;
