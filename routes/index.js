var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin-login' ,(req,res)=>{
res.render('admin/admin-login')
})

router.post('/login',(req,res)=>{
let issues = [
  {issueNo : "INC0001",
date:"14-04-2021",
module : "Accounts",
issueName : "Cash Voucher",
issueDescription: "Date not accepting"
},
{issueNo : "INC0002",
date:"14-04-2021",
module : "Accounts",
issueName : "Cash Voucher",
issueDescription: "Date not accepting in voucher "
}
]

  res.render('admin/update-issues' ,{issues, admin:true});
});
module.exports = router;
