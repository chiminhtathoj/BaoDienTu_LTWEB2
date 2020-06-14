const express = require('express');

const router = express.Router();

router.get('/login', async function (req, res) {
    res.render('vwAccount/index', {
      layout: false,
      style :'style.css'
    });
  })
router.get('/register',function(req,res)
{
  res.render('vwAccount/SignUp',{
    layout:false
  })
})

module.exports = router;