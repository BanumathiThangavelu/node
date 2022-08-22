const path = require("path");
//console.log(__dirname);
//console.log(__filename);

////basename extension for dummy.js
//console.log(path.basename("dummy.js"));
//console.log(path.extname("dummy.js"));

////basename extension for path.js
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

//to join two path
console.log(path.join(`${__dirname}/test/test.js`));
