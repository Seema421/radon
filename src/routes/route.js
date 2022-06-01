const express = require('express');
const logger = require('../logger/logger')
const helper =require('../util/helper')
const router =express.Router();
const validator=require('../validator/formatter')

router.get('/test-me', function (req, res) {
   logger.welcome;
   logger.now;
   logger.month;
   logger.batch;
   validator.lower;
   validator.upper;
   validator.trim;

    
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason