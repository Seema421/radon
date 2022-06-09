const express = require('express');
const router = express.Router();
const BookController = require ("../controllers/bookController")
const BookModel = require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const PublisherModel=require("../models/publisher");
const bookModel = require('../models/bookModel');



router.get("/getBData", BookController.getBookData)
router.post("/newAuthor", BookController.newAuthor1)
router.post("/authors", BookController.authorData)
router.post("/publisher", BookController.publisherData)
router.post("/newBookDetail", BookController.newBook)
router.post("/newPublisher2",BookController.newPublisher2)
router.post("/newBook2",BookController.newBook2)


module.exports = router;