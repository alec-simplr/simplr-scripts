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
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            cacheCompression: false,
            compact: environment.isEnvProduction,
            babelrc: false,
            configFile: false,
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-env",
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              // enables styled-components
              "babel-plugin-styled-components",
              "babel-plugin-macros",
              // remove propTypes from prod build
              environment.isEnvProduction && [
                "babel-plugin-transform-react-remove-prop-types",
                {
                  removeImport: true,
                },
              ],
            ].filter(Boolean),
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
