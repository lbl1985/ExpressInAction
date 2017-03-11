var express = require("express");

var api2 = express.Router();

api2.get("/timezone", function(req, res){
    res.json({"timezone": "API2 time zone"});
    return;
});

api2.get("/all-timezone", function(req, res){
    res.json({"all-timezone": "API2: all-time zone"});
    return;
});

module.exports = api2;