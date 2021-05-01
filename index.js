var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Class' });
});

router.get('/:class', function(req, res, next) {
  res.render('index', { title: req.params.class });
});

router.get('/:class/:batch', function(req, res, next) {
  res.render('index', { title: req.params.class+' ' +req.params.batch });
});

module.exports = router;
