const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productController")
const CommonMW = require ("../middlewares/commonMiddlewares")

router.post("/createUser1",ProductController.createUser)
router.post ("/productUser1",ProductController.productUser)
router.post("/createuser2",ProductController.createuser2,)
router.post("/firstOrder1", CommonMW.mid1,ProductController.order1)
router.get("/updatePrize", ProductController.updatePrize)



module.exports = router;