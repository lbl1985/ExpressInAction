var express = require('express');

var ALLOWED_IPS = [
    "::ffff:127.0.0.1",
    "::ffff:123.456.7.89"
];

var api = express.Router();

api.use(function(req, res, next){
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if(!userIsAllowed) {
        res.status(404).send("Not authorized");
    } else {
        next();
    }
});

api.get("/user", function(req, res){
    res.send("api_router " + req.url + " GET message");
});

api.post("/user", function(req, res){
    res.send("api_router " + req.url + " POST message");
});

api.get("/messages", function(req, res){
    res.send("api_router " + req.url + " GET message");
});

api.post("/messages", function(req, res){
    res.send("api_router " + req.url + " POST message");
});

module.exports = api;