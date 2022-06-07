const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController = require ("../controllers/bookController")
const BookModel = require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createBookData", BookController.bookData)
router.get("/getBookDetail", BookController.getBookData)

module.exports = router;