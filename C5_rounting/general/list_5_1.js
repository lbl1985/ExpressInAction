var express = require("express");
var app = express();

app.get("/minjie", function(req, res){
    res.send("Welcome to minjie's homework!");
});

// app.get("/users/:userid", function(req, res, next){
//     var id = parseInt(req.params.userid, 10);
//     if(id !== NaN){
//         res.send("Welcome to user page " + id.toString());
//     } else {
//         next();
//     }
// });

app.get(/^\/users\/(\d+)$/, function(req, res){
    var userId = parseInt(req.params[0], 10);
    res.send("user page from regex " + userId.toString());
});

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res){
    var startId = req.params[0];
    var endId = req.params[1];
    res.send("user page from " + startId.toString() + " to " + endId.toString());
});

var horribleRegex = /^\/([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$)/i;

app.get(horribleRegex, function(req, res){
    var uuid = req.params[0];
    res.send("uuid page: " + uuid);
});

app.use(function(req, res){
    res.status(404).send("Page not found!");
});

app.listen(3000);