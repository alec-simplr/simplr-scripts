const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const commonConfig = require("./webpack.common");
const environment = require("./environment");
const { appModuleFederationConfig } = require('./paths');

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${environment.port}/`,
  },
  devServer: {
    port: environment.port,
    historyApiFallback: {
      index: "index.html",
    },
    compress: true,
    noInfo:   true,
    open:     true,
    overlay:  true,
  },
  plugins: [
    appModuleFederationConfig && new ModuleFederationPlugin(appModuleFederationConfig),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};

module.exports = merge(commonConfig, devConfig);
