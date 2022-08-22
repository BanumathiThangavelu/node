//var http = require("http");
const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home page</h1>");
  }
  if (req.url === "/about") {
    res.end("<h1>about page</h1>");
  }
  if (req.url === "/service") {
    res.end("<h1>Service page</h1>");
  }
});

app.listen(2500, () => {
  console.log("server started on 2500");
});

//create a server object:
//http
//  .createServer(function (req, res) {
//    res.write("Hello!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080
