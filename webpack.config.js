const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: [

    __dirname + '/src/themes/blankslate/assets/js/main.js',
    __dirname + '/src/themes/blankslate/assets/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'src/themes/blankslate/dist'),
    filename: devMode ? "[name].js" : "[name].[contenthash].js",
  },
  devtool: devMode ? "source-map" : false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    }),
    ...(devMode ? [new webpack.HotModuleReplacementPlugin()] : []),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      `...`, 
      new CssMinimizerPlugin(),
    ],
  },
};