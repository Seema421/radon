const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productController")
const CommonMW = require ("../middlewares/commonMiddlewares")

router.post("/createUser",CommonMW.headerValidation,ProductController.createUser)
router.post ("/createProduct",ProductController.createProduct)
router.post("/firstOrder1", CommonMW.headerValidation,ProductController.order)

module.exports = router;