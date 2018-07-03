var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  data = req.body;
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');
    database.collection('user-data').find({username : data.user}).toArray(function(error,data) {
      if(error)throw error;
      if(data == '') {
        console.log("user not found");
        res.send({error : "User not found",loggedIn : false});
      }
      else {
        if(req.body.pass1 == data[0].password) {
          res.send({error: '',loggedIn : true})
        }
      }
    })
  })
})


module.exports = router;
