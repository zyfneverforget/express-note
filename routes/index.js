var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {     //这里的get 是get请求
  console.log(req.session)
  res.render('index', { title: 'Express' });
});

/* router.get('/', function(req, res, next) {
  var data;
  console.log(req.session)
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user
    }
  }else{
    data = {
      isLogin: false
    }
  }
  console.log(data)
  res.render('index', data);
});
 */

module.exports = router;
