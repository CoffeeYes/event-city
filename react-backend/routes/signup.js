var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  var data = req.body;
  console.log(data)
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');
    database.collection('user-data').find({username : data.user}).toArray(function(error,data) {
      if(error)throw error;
      if(data != '') {
        return res.send({error: "User already exists"})
      }
    })
  })
})


module.exports = router;
