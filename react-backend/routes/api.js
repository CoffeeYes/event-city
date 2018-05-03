var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send({test_key : 'test_value'})
});

router.get('/cities',function(req,res,next) {
  var query = req.query
  res.send({query_text: query})
})

module.exports = router;
