var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

router.get('/*',function(req,res,next) {
  console.log(req)
})

module.exports = router;
