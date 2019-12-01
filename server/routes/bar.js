var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('looking for bar');
  res.render('bar/index', { title: 'bar' });
});
router.get('/junk', function(req, res, next) {
  console.log('looking for bar');
  res.render('bar/junk', { title: 'junk' });
});

module.exports = router;
