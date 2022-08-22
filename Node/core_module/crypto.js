const crypto = require("crypto");
const hash = crypto
  .createHmac("sha256", "love")
  .update("I Love Node")
  .digest("hex");
console.log(hash);
