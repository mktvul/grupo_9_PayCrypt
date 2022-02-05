//Require's
const express = require("express");
const router = express.Router();

//Controller
const resumen = require('../controllers/resumenController');

//Index
router.get("/", resumen.resumen);



module.exports = router;
