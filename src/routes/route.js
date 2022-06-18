const express = require('express');
const router = express.Router();
const cowinController=require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")


router.get("/cowin/states1", cowinController.getstates1)
router.get("/cowin/getdistricts/:state_id",cowinController.getDistrict1)
router.get("/getByPin1",cowinController.getByPin1)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/cowin/getSessionsByDistrict",cowinController.getSessionsByDistrict)
router.get("/weatherOfLondon", weatherController.weatherOfLondon)
router.get("/tempOfAllCities", weatherController.tempOfAllCities)
router.post("/memHandler", weatherController.memHandler)







module.exports = router;