const path = require("path");

module.exports = {
  mode: "production",
  // target: ["web", "node"],
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "commonjs2",
    },
  },
};
