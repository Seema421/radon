const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserModel=this.report('../models/userModel.js')
const UserController = require("../controllers/userController");
const UserModel = require('../models/userModel');//ist import to use userModel

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.get("/test1-api", function (req, res) {
    res.send("My api to create and save data")
})

router.post("/test1-post", UserController.createUser1)

router.get("/allData", UserController.allData )

router.post("/createDet8", UserController.allBookData);

router.get("/getBookDetail", UserController.getBookData);
router.get("/familyData", UserController.getfamilyData);
router.post("/comFamilyData", UserController.familyData);

module.exports = router;