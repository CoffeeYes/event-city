var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send({test_key : 'test_value'})
});

module.exports = router;
