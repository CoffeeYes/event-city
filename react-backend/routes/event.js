var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
    var query = String(req.query.query);
    mClient.connect(connect.mongo.url,function(error,client) {
      if(error) throw error;
      var database = client.db(connect.mongo.db_name);
      database.collection('cities').find({events : {$elemMatch : {code : query}}}).toArray(function(error,data) {
        var result = data[0].events;
        for(var item in result) {
          if (result[item].code == query) {
            console.log(result[item])
            res.send(result[item])
          }
        }
      })
    })
});

module.exports = router;
