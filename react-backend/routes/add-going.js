var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  mClient.connect(connect.mongo.url,function(error,client) {
    var id = req.body.id
    var database = client.db('pinterest-clone');
    database.collection('user-data').update({username : req.body.user},{$push : {going : id}})
  })
})


module.exports = router;
