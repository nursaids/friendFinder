var express = require("express");
const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes");
var friends = require("./data/friends");

var PORT = process.env.PORT || '8080'

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});