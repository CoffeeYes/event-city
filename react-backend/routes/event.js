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
      //match event based on ID
      database.collection('events').find({code : query}).toArray(function(error,data) {
        var result = data[0].events;
        res.send(result)
        }
      })
    })
});

module.exports = router;
