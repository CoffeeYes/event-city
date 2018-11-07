var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {

  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');

    database.collection("codes").find({_id : Oid("5b66f809e7179a4c61391c03")}).toArray(function(error,data) {
      if(error)throw error;
      var current_code = data[0]["event-code"];

      database.collection("codes").updateOne({_id : Oid("5b66f809e7179a4c61391c03")},{$inc : {"event-code" : 1}})
      //data to be added to users documents
      var data_user = {
        date : req.body.date,
        location : req.body.location,
        time : req.body.time,
        title : req.body.title,
        city: req.body.city_specific,
        code: String(current_code)
      }
      //data to be added to cities' documents, this is what gets displayed on event page
      var data_city = {
        city: req.body.city_specific,
        date : req.body.date,
        location : req.body.location,
        time : req.body.time,
        title : req.body.title,
        user : req.body.user,
        going_count: 0,
        code : String(current_code)
      }
      //push data
      database.collection('user-data').updateOne({username : req.body.user},{$push : {events : data_user}})
      database.collection('events').insertOne(data_city)
    })
  })
})


module.exports = router;
