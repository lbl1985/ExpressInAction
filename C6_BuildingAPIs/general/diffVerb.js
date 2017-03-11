var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send("GET");
});

app.post("/", function(req, res){
    res.send("POST");
});

app.put("/", function(req, res){
    res.send("PUT");
    return;
});

app.delete("/", function(req, res){
    res.send("DELETE");
    return;
});

app.listen(3000, function(req, res){
    console.log("diff Verbs started");
})