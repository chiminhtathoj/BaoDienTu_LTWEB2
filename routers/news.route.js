const express = require('express');
const router = express.Router();
router.get('/',function (req, res) {
    res.render('vwNews/Content',
    {
        style:'main.css'
    });
});
module.exports = router;