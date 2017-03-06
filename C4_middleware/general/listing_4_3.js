var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next){
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});

app.use(function(req, res, next){
    var filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, function(err, fileInfo){
        if(err) {
            next();
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.get("/", function(req, res){
    res.end("Hello world from my own");
});

app.get("/files/:fileName", function(req, res, next){
    var file = req.params.fileName;
    var filePath = path.join(__dirname, "static", file);
    fs.stat(filePath, function(err, fileInfo){
        if(err) {
            next();
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.get("/files/:project/:fileName", function(req, res, next){
    var filePath = path.join(__dirname, "static", req.params.project, req.params.fileName);
    fs.stat(filePath, function(err, fileInfo){
        if(err) {
            next();
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.use(function(req, res){
    res.status(404);
    res.send("File not found!");
})

app.listen(3000, function(){
    console.log("App Started on port 3000");
})
