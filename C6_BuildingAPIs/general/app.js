var express = require('express');

var app = express();

app.get("/random/:min/:max", function(req, res, next){
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);

    if(isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({error:"Data send is not compatible"});
        return;
    }
    var rand = Math.round(Math.random() * (max - min) + min);
    res.status(200);
    res.json({randNum: rand});
    return;
});

app.listen(3000, function(){
    console.log("random number generator started");
});