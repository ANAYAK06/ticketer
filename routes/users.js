var express = require('express');
var router = express.Router();
var addIssue = require('../helpers/issue-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user-login', (req,res)=>{
res.render('user/user-login')

})
router.post('/user-home',(req,res)=>{
res.render('user/create-issues',{user:true})
});
router.post('/create-issue',(req,res)=>{
addIssue.createIssue(req.body,(result)=>{
  res.render('user/create-issues')
})
})

module.exports = router;
