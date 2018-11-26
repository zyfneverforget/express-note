var express = require('express');
var router = express.Router();
var NoteData = require('../model/data').NoteData  

/* GET users listing. */
router.get('/notes', function(req, res, next) {
  NoteData.findAll({raw: true}).then((text)=>{
    console.log(text)
    res.send(text);
  })
});
router.post('/create', function(req, res, next) {     //请求的完整路径为/users/abc
  console.log('create ok')
  res.send('respond with a resource');
});

module.exports = router;
