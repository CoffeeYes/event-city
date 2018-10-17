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
    //match username
    database.collection('user-data').find({username : data.user}).toArray(function(error,data) {
      if(error)throw error;
      if(data == '') {
        //send error to frontend
        res.send({error : "User not found",loggedIn : false});
      }
      else {
        //send loggedin status flag and data to frontend based on PW match
        if(req.body.pass1 == data[0].password) {
          res.send({error: '',loggedIn : true,events : data[0].going})
        }
        else {
          //send error to frontend
          res.send({error: 'Incorrect password',loggedIn : false})
        }
      }
    })
  })
})


module.exports = router;
