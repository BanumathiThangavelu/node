const events = require("events");

const myEmitter = new events.EventEmitter();
myEmitter.addListener("my", () => {
  console.log("OOps Fired!!!");
});
myEmitter.emit("my");
