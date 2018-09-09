var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  var data = req.body;

  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');
    database.collection('user-data').find({username : data.user}).toArray(function(error,data) {
      if(error)throw error;
      if(data != '') {
        return res.send({error: "User already exists"})
      }
      else {
        database.collection('user-data').find({email : data.email}).toArray(function(error,data) {
          if(error)throw error;
          if(data != '') {
            return res.send({error: "Email is already in use"})
          }
          else {
            database.collection('user-data').insertOne({
              'username' : req.body.user,
              'email' : req.body.email,
              'password' : req.body.pass1,
              'events' : [],
              'going' : []
            })
          }
        })
      }
    })
  })
})


module.exports = router;
