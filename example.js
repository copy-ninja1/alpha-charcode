const AlphaBeta = require("./dist/index.js");

let _from = new AlphaBeta().from("B", "G").random().val;
let _random = new AlphaBeta().random().val;

console.log("using From : ", _from);
console.log("using Random : ", _random);

console.log("Done with examples");
