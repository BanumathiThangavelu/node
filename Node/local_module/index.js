//method1
//const myFunc = require("./one");
//myFunc();

//method2
//const global = require("./one");
//global.myFunc();
//console.log(global.x);

//method3
//const global = require("./one");
//global.func();
//console.log(global.num);

//method4
const global = require("./one");
global.func();
console.log(global.num);
global.dummy();
