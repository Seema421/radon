const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController = require ("../controllers/bookController")
const CommonMW = require ("../Middleware/auth")
// const BookModel = require("../models/bookModel")



router.post("/createUser", UserController.createUser  )


router.post("/login",UserController.loginUser)
router.get("/user/:userId",CommonMW.mid,UserController.getUsersData)
router.put("/updateUser/:userId",CommonMW.mid,UserController.updateUser)
router.delete("/removeUser/:userId",CommonMW.mid,UserController.removeUser)

module.exports = router;