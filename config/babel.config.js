const environment = require("./environment");
const { appPackageJson } = require("./paths");

module.exports = {
  // This is a feature of `babel-loader` for webpack (not Babel itself).
  // It enables caching results in ./node_modules/.cache/babel-loader/
  // directory for faster rebuilds.
  cacheDirectory: true,
  cacheCompression: false, // TODO: check if true will reduce the bundle size
  minified: environment.isEnvProduction,
  babelrc: false,
  configFile: false,
  presets: [
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-env", { targets: appPackageJson.targets || "defaults" }], // TODO: make sure it actually works
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "babel-plugin-macros",
    // enables styled-components. options.pure=true eleminates dead styled-components code
    ["babel-plugin-styled-components", { pure: true }],
    // remove propTypes from prod build
    environment.isEnvProduction && [
      "babel-plugin-transform-react-remove-prop-types",
      { removeImport: true },
    ],
  ].filter(Boolean),
};
