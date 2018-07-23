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

    var data = {
      date : req.body.date,
      location : req.body.location,
      time : req.body.time,
      title : req.body.title
    }

    database.collection('user-data').update({username : req.body.user},{$push : {events : data}})
  })
})


module.exports = router;
