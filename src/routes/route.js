const express = require('express')
const logger = require('../logger/logger')
const helper =require('../util/helper')
const validator=require('../validator/formatter')
const lodash = require('express')

const router =express.Router();

router.get('/test-me', function (req, res) {
   logger.welcome;
   helper.now;
   helper.month;
   helper.batch;
   validator.lower;
   validator.upper;
   validator.trim;
 
    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {

const _ = require ("lodash");
let arr = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
//making chunk of size 4
console.log(_.chunk(arr,4))
const_ = require ('lodash');
let x=[1,3,5,7,9,11,13,15,16]
let newNum=_.tail(x);
console.log(newNum)

res.send('My second ever api')

});




module.exports = router;
// adding this comment for no reason