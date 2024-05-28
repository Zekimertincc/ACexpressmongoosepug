var express = require('express');
var router = express.Router();
var path = require('path');

// Ana sayfa
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// Diğer sayfalar
router.get('/acilandikey', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'acılandikey.html'));
});
router.get('/acilanyatay', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'acılanyatay.html'));
});
router.get('/benzerkelime', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'benzerkelimeler.html'));
});
router.get('/blokokuma', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'blokokuma.html'));
});
router.get('/büyüyendaire', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'büyüyendaire.html'));
});
router.get('/büyüyendikdört', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'büyüyendikdört.html'));
});
router.get('/büyüyenkare', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'büyüyenkare.html'));
});
router.get('/hızlıokuma', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'hızlıokuma.html'));
});
router.get('/kolonlar', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'kolonlar.html'));
});
module.exports = router;
