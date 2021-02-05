// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

// check if browserslist exists in package.json
const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');


const availableScripts = ['start', 'test', 'build'];
const args = process.argv.slice(2);
const script = args[0];

// break if unknown script
if (!availableScripts.includes(script)) {
  console.log(`Unknown script ${script}.`);
  process.exit();
}

if (script === 'start') {
  console.log('Starting the application...');
  const config = require('../config/webpack.dev');
  const port = config.devServer.port;

  const compiler = webpack(config);

  const devServer = new WebpackDevServer(compiler);
  
  devServer.listen(port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
  });

  compiler.hooks.done.tap('done', (stats) => {

  })
}
