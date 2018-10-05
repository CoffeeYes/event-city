var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  mClient.connect(connect.mongo.url,function(error,client) {
    var id = req.body.id
    var database = client.db('pinterest-clone');
    database.collection('events').find({code : String(req.body.id)}).toArray(function(error,data) {
      if(error)throw error;
      if(data[0].going.indexOf(req.body.user) == -1) {
        database.collection('events').update({code : req.body.id},{$push : {going : req.body.user}});
        database.collection('events').update({code : req.body.id},{$inc : {going_count : 1}});
        database.collection('user_data').update({username : req.body.user},{$push : {going : req.body.id}})
        res.send({status : "inc"})
      }
      else {
        database.collection('events').update({code : req.body.id},{$pull : {going : req.body.user}});
        database.collection('events').update({code : req.body.id},{$inc : {going_count : -1}});
        res.send({status : "dec"})
      }
    })
  })
})


module.exports = router;
