const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.get("/createBook",BookController.createBook)
// router.get("/", commonMW.mid1,UserController.basicCode)
module.exports = router;