const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

// @ts-ignore
module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval',
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3000,
    hot: true,
    open: true,
    compress: false,
    historyApiFallback: true,
  },
});
