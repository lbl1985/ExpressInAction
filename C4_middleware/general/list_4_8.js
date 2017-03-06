var express = require("express");
var morgan = require("morgan");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// app.get("/files/:fileName", function(req, res, next){
//     var filePath = path.join(__dirname, "static", req.params.fileName);
//     express.static(filePath);
//     next();
// });

app.use(function(req, res){
    res.status(404);
    res.send("File not found!");
})

app.listen(3000, function(){
    console.log("App Started on port 3000");
})
