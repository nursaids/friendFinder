const express = require('express');
const router = express.Router();
var path = require('path');

router.get("/survey", function (req, res) {
  
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("/", function (req, res) {
    
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;