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
})

app.use(function(req, res){
    res.status(404).send("Page not found!");
});

app.listen(3000);