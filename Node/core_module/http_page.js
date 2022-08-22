const http = require("http");
const path = require("path");
const fs = require("fs");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(`${__dirname}/main/home.html`),
      "utf-8",
      (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      }
    );
  }

  if (req.url === "/service") {
    fs.readFile(
      path.join(`${__dirname}/main/service.html`),
      "utf-8",
      (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    );
  }
  //we can send res as JSON format
  if (req.url === "/about") {
    const x = [{ id: 1, Name: "Banu" }];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(x));
  }
});

app.listen(2501, () => {
  console.log("server started on 2501");
});
