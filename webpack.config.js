const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  })
];
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: plugins,

  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true
  }
};
