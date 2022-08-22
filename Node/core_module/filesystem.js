const fs = require("fs");
const path = require("path");

//create a directory
fs.mkdir("test", (err) => {
  if (err) {
    throw err;
  }
  console.log("Dir created");
  //write a file in a directory
  fs.writeFile(path.join(`${__dirname}/test/test.js`), "I am Banu\n", (err) => {
    if (err) {
      throw err;
    }
    console.log("file created");
  });
  //read the data
  fs.readFile(path.join(`${__dirname}/test/test.js`), "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    //we can write the data which we red from test to another file created in new dir
    fs.mkdir("text", (err) => {
      if (err) {
        throw err;
      }
      fs.writeFile(path.join(`${__dirname}/text/text.js`), data, (err) => {
        if (err) {
          throw err;
        }
        console.log("File copied");
      });
    });
  });
  //To append the content
  fs.appendFile(
    path.join(`${__dirname}/test/test.js`),
    "I Love node \n",
    (err) => {
      if (err) {
        throw err;
      }
      console.log("File append");
    }
  );
  //rename the file name
  fs.rename(
    path.join(`${__dirname}/test/test.js`),
    path.join(`${__dirname}/test/banu.js`),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("file renamed");
    }
  );
});
