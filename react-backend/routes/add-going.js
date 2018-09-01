var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  mClient.connect(connect.mongo.url,function(error,client) {
    var database = client.db('pinterest-clone');
    database.collection('cities').update({events : $elemMatch : {code : req.body.city}},{$push : {going : req.body.user}})
  })
})


module.exports = router;
