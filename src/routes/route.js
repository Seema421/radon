const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test",commonMW.mid1,commonMW.mid2,commonMW.mid3,commonMW.mid4,commonMW.mid5,commonMW.test)

module.exports = router;