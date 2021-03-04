const path = require("path");

module.exports = function(_env, argv) {

  return {
    devtool: "cheap-module-source-map",
    entry: "./src/lib/index.js",
    devtool: "inline-source-map",
    mode: 'development',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "lib.js",
      publicPath: "/",
      libraryTarget: "system",
    },
    externals: {
      'lib': 'system lib'
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
    }
  }
}
