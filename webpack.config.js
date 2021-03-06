const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    './style.css': './src/style.scss'
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      stats: "errors-only",
      open: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Project Demo',
          hash: true,
          template: 'index.html'
      }),
      new ExtractTextPlugin({
          filename: 'app.css',
          disable: false,
          allChunks: true
      })
  ]
};