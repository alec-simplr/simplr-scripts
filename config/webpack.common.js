const Dotenv = require("dotenv-webpack");
const environment = require("./environment");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            ...require('./babel.config'),
          },
        },
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: environment.imageInlineSizeLimit,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    // enables use of .env file, not supported by default in webpack 5
    new Dotenv(),
  ],
  // provides fallback option for node modules that aren't avialable in browser
  resolve: {
    fallback: {
      path: false,
      assert: false,
      fs: false,
      os: false,
      util: false,
    },
  },
};
