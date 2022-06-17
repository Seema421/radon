const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController = require ("../controllers/bookController")
const CommonMW = require ("../Middleware/auth")




router.post("/createUser", UserController.createUser  )
router.post("/login",UserController.loginUser)
router.get("/user/:userId",CommonMW.mid,UserController.getUsersData)
router.put("/updateUser/:userId",CommonMW.mid,UserController.updateUser)
router.delete("/removeUser/:userId",CommonMW.mid,UserController.removeUser)
router.post("/loginuser2/:userid",UserController.loginUser2)
router.post("/user/:userid/posts",UserController.wallPost)
router.post("/loginUser3",UserController.loginUser3)
router.get("/getUserData3/:userid",UserController.getUserData3)
router.get("/wallPostSahiba/:userid/posts",CommonMW.mid2,UserController.wallPostSahiba)
router.delete("/removeSabhia/:userid",CommonMW.mid2,UserController.removeSabhia)

module.exports = router;