const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
    [require.resolve("@babel/preset-env"), { targets: { node: "current" } }],
  ],
  babelrc: false,
  configFile: false,
});
