var express = require('express');
var router = express.Router();
var mClient = require('mongodb').MongoClient;
var connect = require('../bin/connect.js');
var Oid = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
    
});

module.exports = router;
