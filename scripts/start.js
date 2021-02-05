const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');

module.exports = () => {
  console.log("Starting the application...");

  // Do this as the first thing so that any code reading it knows the right env.
  process.env.BABEL_ENV = 'development';
  process.env.NODE_ENV = 'development';

  // check if browserslist exists in package.json

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
