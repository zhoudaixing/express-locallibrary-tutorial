import express from 'express';
// var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', (req, res, next) =>{
  res.send('You are so cool');
})

export default router;
// module.exports = router;
