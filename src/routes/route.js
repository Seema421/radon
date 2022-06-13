const express = require('express');
const router = express.Router();


const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



module.exports = router;