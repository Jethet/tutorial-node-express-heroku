var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  console.log("GET request for the homepage.");
  res.send("This is GET");
});

app.post("/", function(req, res) {
  console.log("POST request for the homepage");
  res.send("This is POST");
});

app.delete("/del_user", function(req, res) {
  console.log("Request to DELETE for /del_user");
  res.send("This is DELETE");
});

app.get("/list_user", function(req, res) {
  console.log("GET request for /list_user");
  res.send("Page listening");
});

app.get("/ab*cd", function(req, res) {
  console.log("GET request for /ab*cd");
  res.send("Page Pattern Match");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app listening at http://%s:%s", host, port);
});
