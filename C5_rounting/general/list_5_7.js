var express = require('express');
var https = require("https");
var path = require('path');
var fs = require("fs");
var apiRouter = require("./routes/api_router");

var app = express();

var staticPath = path.resolve(__dirname, "static");
app.use("/config", express.static(staticPath));

var photoPath = path.resolve(__dirname, "photos-folder");
app.use("/actor", express.static(photoPath));

app.use("/api", apiRouter);

app.use(express.static(staticPath));
app.use(express.static(photoPath));

// var httpsOptions = {
//     key: fs.readFileSync("./private/privatekey.pem"),
//     cert: fs.readFileSync("./private/request.pem")
// }

app.listen(3000);