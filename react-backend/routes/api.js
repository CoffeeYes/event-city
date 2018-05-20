var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send({test_key : 'test_value'})
});

router.get('/cities',function(req,res,next) {
  var query = String(req.query.query).toLowerCase()
  mClient.connect(connect.mongo.url,function(error,client) {
    if(error)throw error;
    var database = client.db('pinterest-clone')
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

module.exports = router;
