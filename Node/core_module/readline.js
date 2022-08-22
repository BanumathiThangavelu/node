const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

//this is only to display
//rl.question("What is your age? ", (age) => {
//  console.log("Your age is: " + age);
//  rl.close();
//});

//How to validate this.
rl.question("What is your name? ", (ans) => {
  if (ans === "Banu") {
    rl.close();
  } else {
    rl.setPrompt("Wrong Name Try again\n");
    rl.prompt();
    rl.on("line", (inp) => {
      if (inp === "Banu") {
        rl.close();
      } else {
        rl.setPrompt(inp + " wrong \n");
        rl.prompt();
      }
    });
  }
});
rl.on("close", () => {
  console.log("Correct!!!");
});
