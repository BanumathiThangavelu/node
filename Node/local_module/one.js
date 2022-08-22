//method1
//function myFunc() {
//  console.log("function is working in method1");
//}
//
//module.exports = myFunc;

//method2
//function myFunc() {
//  console.log("function is working in method2");
//}
//let x = 123456;
//
//module.exports.myFunc = myFunc;
//module.exports.x = x;

//method3
//module.exports.func = function myFunc() {
//  console.log("function is working in method3");
//};
//module.exports.num = x = 123456;

//method4
func = function myFunc() {
  console.log("function is working in method4");
};

num = x = 123456;

module.exports = {
  func: func,
  num: num,
  //we can export fn here also
  dummy: () => {
    console.log("Dummy Function");
  },
};
