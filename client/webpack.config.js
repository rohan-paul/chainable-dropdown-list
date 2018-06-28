const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
const path = require('path');

const publicPath = '/';
const srcPath = path.join(__dirname, 'src');

/*const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html"
  
});*/

module.exports = {
  entry: [
        path.join(srcPath, 'index.js'),
    ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({      
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
