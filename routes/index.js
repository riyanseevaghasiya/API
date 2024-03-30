var express = require('express');
var router = express.Router();
var user = require('../controller/usercon');

router.post('/insert',user.insert);
router.get('/view',user.getdata);


module.exports = router;
