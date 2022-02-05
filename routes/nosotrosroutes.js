//Require's
const express = require("express");
const router = express.Router();

//Controller
const data = require('../controllers/dataController');

//Index
router.get("/", data.nosotros);



module.exports = router;
