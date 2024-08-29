const fs = require("fs");
const path = require("path");
const res = fs.readFileSync(path.resolve(__dirname, "./var.css"));
const myModule = require("./src/index.js");
console.log(__dirname);
myModule.testDir();
console.log(res.toString());