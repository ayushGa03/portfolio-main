const express = require("express")
const router = express.Router()
const emailControler = require("../controllers/email.controller")
router.post("/sendMessage" , emailControler)

module.exports = router