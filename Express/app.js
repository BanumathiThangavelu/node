const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/home", function (req, res) {
  res.send(
    "<h1>welcome to GET method " +
      req.query["username"] +
      "</h1><br><h2>mail ID :" +
      req.query["mailid"] +
      "</h2>"
  );
});

app.listen(8081, () => {
  console.log("server started");
});
