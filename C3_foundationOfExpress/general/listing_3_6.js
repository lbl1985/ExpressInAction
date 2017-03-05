var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next){
    console.log("In comes a " + req.method + " to " + req.url);
    next();
});

app.use(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World from Binlong Li");
});

http.createServer(app).listen(3000);
