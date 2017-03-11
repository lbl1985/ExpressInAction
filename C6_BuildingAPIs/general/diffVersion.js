var express = require('express');

var appVer1 = require('./api1.js');  
var appVer2 = require("./api2.js");

var app = express();

app.use("/v1", appVer1);
app.use("/v2", appVer2);

app.listen(3000, function(req, res){
    console.log("different Version started");
})
