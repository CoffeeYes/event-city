var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

//get data for single event on click
router.get('/', function(req, res, next) {
    var query = String(req.query.query);
    mClient.connect(connect.mongo.url,function(error,client) {
      if(error) throw error;
      var database = client.db(connect.mongo.db_name);
      //match event based on ID and send data to frontend
      database.collection('events').find({code : query}).toArray(function(error,data) {
        var result = data[0];
        res.send(result);
        })
    })
});

router.post('/userevents',function(req,res,next) {
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db(connect.mongo.db_name);
    database.collection('user-data').find({username : req.body.user}).toArray(function(error,data) {
      res.send(data[0].events);
    })
  })
})

router.post('/delete-event',function(req,res,next) {
  console.log(req.body)
  var code = parseInt(req.body.code);
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db(connect.mongo.db_name);

    database.collection('events').deleteOne({code : code});
  })
})

module.exports = router;
