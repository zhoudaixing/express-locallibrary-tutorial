import express from 'express'
// var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.redirect('/catalog')
});

export default router;
// module.exports = router;
