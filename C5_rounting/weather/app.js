var express = require('express');
var path = require('path');
var zipdb = require('zippity-do-dah');
var forecastio = require('forecastio');

var app = express();
var weather = new forecastio("8fb0405102936407dc220b4225d26172");

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    app.render("index");
});

app.get(/^\/(\d{5})$/, function(req, res, next){
    var zipcode = req.params[0];
})