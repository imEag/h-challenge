const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public/build');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/react']
            }
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
