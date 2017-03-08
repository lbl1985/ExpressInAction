var express = require('express');
var path = require('path');
var apiRouter = require("./routes/api_router");

var app = express();

var staticPath = path.resolve(__dirname, "static");
app.use("/config", express.static(staticPath));

var photoPath = path.resolve(__dirname, "photos-folder");
app.use("/actor", express.static(photoPath));

app.use("/api", apiRouter);

app.use(express.static(staticPath));
app.use(express.static(photoPath));

app.listen(3000);