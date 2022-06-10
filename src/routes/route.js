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
router.post("/publisher3",BookController.publisher3)
router.post("/author2",BookController.author2)
router.post("/authorno",BookController.author3)
router.post("/goodAuthor",BookController.author4)
router.post("/author5",BookController.author5)
router.post("/book3",BookController.book3)
router.post("/book4",BookController.book4)
router.post("/book5",BookController.book5)
router.post("/book6",BookController.book6)
router.post("/book7",BookController.book7)
router.post("/book8",BookController.book8)
router.post("/book9",BookController.book9)
router.post("/book10",BookController.book10)
router.put("/updatebook",BookController.updateBook)
router.put("/updateprize",BookController.updatePrize)



module.exports = router;