var express = require('express');

var router = express.Router();

router.get("/timezone", function(req, res){
    res.json({"timezone": "sample response from timezone"});
    return;
});

router.get("/all-timezone", function(req, res){
    res.json({"all-timezone": "sample response from all-timezone"});
    return;
});

module.exports = router;