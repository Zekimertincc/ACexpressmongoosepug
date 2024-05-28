var express = require('express');
var router = express.Router();
var path = require('path');

// Ana sayfa
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// Diğer sayfalar
router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'about.html'));
});

module.exports = router;
