var express = require("express");
var app = express();

app.get("/minjie", function(req, res){
    res.send("Welcome to minjie's homework!");
});

app.get("/users/:userid", function(req, res, next){
    var id = parseInt(req.params.userid, 10);
    if(id !== NaN){
        res.send("Welcome to user page " + id.toString());
    } else {
        next();
    }
});

app.use(function(req, res){
    res.status(404).send("Page not found!");
});

app.listen(3000);