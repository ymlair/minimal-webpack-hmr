
path = require 'path'
{resolve} = require 'path'
webpack = require 'webpack'

module.exports =
  entry:
    main: './src/index.js'
  devServer:
    hot: true
    contentBase: resolve(__dirname)
    publicPath: '/'
  output:
    path: path.join __dirname, '../target/'
    filename: '[name].js'
  module:
    rules: []
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    new webpack.NamedModulesPlugin()
  ]
