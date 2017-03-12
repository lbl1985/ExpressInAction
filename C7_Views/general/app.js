var express = require('express');
var path = require('path');
var ejs = require("ejs");

var app = express();

app.locals.appName = "Song Lyrics";

app.set("view engine", "jade");
app.set("views", path.resolve(__dirname, "views"));
app.engine("html", ejs.renderFile);

app.use(function(req, res, next){
    res.locals.userAgent = req.headers['user-agent'];
    next();
});

var staticPath = path.join(__dirname, "static/img");
app.use("/img", express.static(staticPath));

app.get("/welcome", function(req, res){
    res.render("welcome");
});

app.get("/yiyan", function(req, res){
    res.render("yiyan");
})


app.get("/about", function(req, res){
    res.render("about", {
        currentUser: "india-ariel123"
    });
});

app.get("/new_page", function(req, res){
    res.render("new_page.ejs", {
        appTitle: "View New Page"
    });
})

app.get("/contact", function(req, res){
    res.render("contact.ejs", {
        name: "Tony Hawk",
        birthyear: 1968,
        career: "skateboarding",
        bio: "<b>Tony Hawk</b> is the coolest skateboarder around."
    });
});

app.use(function(req, res){
    res.status(404);
    res.render("404.html", {
        urlAttempt: req.url
    });
});

app.listen(3000, function(){
    console.log("C7_views general app.js started");
});