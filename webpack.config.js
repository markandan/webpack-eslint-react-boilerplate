const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'scripts/app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React Application',
      template: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      }
    ],
  }
};
