
var path = require("path");
var resolve = require("path").resolve;
var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname),
    publicPath: "/"
  },
  output: {
    path: path.join(__dirname, "../target/"),
    filename: "[name].js"
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
