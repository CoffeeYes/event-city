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

    database.collection("codes").find({_id : Oid("5b66f809e7179a4c61391c03")}).toArray(function(error,data) {
      if(error)throw error;
      var current_code = data[0]["event-code"];

      database.collection("codes").update({_id : Oid("5b66f809e7179a4c61391c03")},{$inc : {"event-code" : 1}})

      var data_user = {
        date : req.body.date,
        location : req.body.location,
        time : req.body.time,
        title : req.body.title,
        city: req.body.city_specific
      }
      var data_city = {
        date : req.body.date,
        location : req.body.location,
        time : req.body.time,
        title : req.body.title,
        user : req.body.user,
        code : current_code
      }

      database.collection('user-data').update({username : req.body.user},{$push : {events : data_user}})
      database.collection('cities').update({city : req.body.city_specific},{$push : {events : data_city}})
    })
  })
})


module.exports = router;
