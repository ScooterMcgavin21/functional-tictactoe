const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(),
  new ESLintPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins,

  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
};
