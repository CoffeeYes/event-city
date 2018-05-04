var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send({test_key : 'test_value'})
});

router.get('/cities',function(req,res,next) {
  var query = req.query
  res.send({query_text  : query})
  mClient.connect(connect.mongo.url,function(error,database) {
    if(error)throw error;
    database.collection('cities').find({id : query}).toArray(function(error,data) {
      if(error)throw error;
      console.log(data)
    })
  })
})

module.exports = router;
