const path = require("path");

module.exports = function(_env, argv) {

  return {
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
    }
  }
}
