var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send({test_key : 'test_value'})
});

//match searchstring with database, show first 20 results
router.get('/cities',function(req,res,next) {
  var query = String(req.query.query)
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db(connect.mongo.db_name)
    database.collection('cities').find({city : {"$regex": query}}).toArray(function(error,data) {
      if(error)throw error;
      var city_arr = [];
      for(var i = 0; i< data.length; i++) {
        if(i < 21) {
          city_arr.push({"country": data[i].country,"city" : data[i].city})
        }
      }
      res.send(city_arr)
    })
  })
})

//get all events listed under city
router.get('/city/*',function(req,res,next) {
  var city = decodeURI(req.url.split('/city/')[1]);
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone');
    database.collection('events').find({'city': city}).toArray(function(error,data) {
      if(error)throw error;
      res.send(data)
    })
  })
})

module.exports = router;
