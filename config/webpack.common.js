module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              // allows to write JSX without importing React
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
    ],
  },
};
