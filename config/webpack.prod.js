const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { appModuleFederationConfig } = require('./paths');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js',
    publicPath: '/marketing/latest/',
  },
  plugins: [
    appModuleFederationConfig && new ModuleFederationPlugin(appModuleFederationConfig),
  ],
};

module.exports = merge(commonConfig, prodConfig);
