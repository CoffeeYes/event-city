var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.post('/',function(req,res,next) {
  var data = req.body;

  for(var item in data) {
    if(data[item].trim() == "") {
      return res.send("fields cannot be empty")
    }
  }
  console.log(data)
})


module.exports = router;
