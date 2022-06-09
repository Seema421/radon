const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController")
const BookController = require ("../controllers/bookController")
const BookModel = require("../models/bookModel")
const AuthorModel=require("../models/authorModel")



router.get("/getBData", BookController.getBookData)
router.post("/novel", BookController.novelData)

router.get("/getAData", BookController.getAuthorData)
router.post("/authors", BookController.authorData)
router.get("/states", BookController.getTwoState)
router.get("/cost", BookController.costFind)
router.get("/authorAge", BookController.authorAgeWise)

module.exports = router;