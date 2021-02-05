const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');

module.exports = () => {
  // check if browserslist exists in package.json

  console.log("Starting the application...");
  const config = require("../config/webpack.dev");
  const port = config.devServer.port;

  const compiler = webpack(config);

  const devServer = new WebpackDevServer(compiler);

  devServer.listen(port, "localhost", (err) => {
    if (err) {
      console.log(err);
    }
  });

  compiler.hooks.done.tap("done", (stats) => {
    // TODO: runs after rebuild, may handle messages here
  });
};
