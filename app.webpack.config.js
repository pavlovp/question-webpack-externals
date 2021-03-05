const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = function(_env, argv) {

  return {
    entry: "./src/app/index.js",
    mode: 'development',
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.js",
      publicPath: "/",
      libraryTarget: "system",
    },
    externals: {
      'lib': 'system lib',
      'react': 'react',
      'react-dom': 'react-dom'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            "css-loader"
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        inject: true
      })
    ],
      devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true
    },

    optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'react',
          chunks: 'all',
        }}
      }
    }
  }
}
