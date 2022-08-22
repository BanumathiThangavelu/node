const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index_post.html");
});

app.post("/home", urlencodedParser, function (req, res) {
  res.send(
    "<h1>welcome to POST method " +
      req.body.username +
      "</h1><br><h2>mail ID :" +
      req.body.mailid +
      "</h2>"
  );
});

app.listen(8082, () => {
  console.log("server started");
});
