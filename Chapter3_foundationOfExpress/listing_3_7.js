var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next){
    console.log("In comes a " + req.method + " to " + req.url);
    next();
});

app.use(function(req, res, next){
    var min = (new Date()).getMinutes();
    if(min % 2 === 0) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Not authorized.");
    }
});

app.use(function(req, res){
    res.end("Secret info: the password is Swordfish! Yay~~");
});

http.createServer(app).listen(3000);