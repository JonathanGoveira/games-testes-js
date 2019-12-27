const path = require('path');

module.exports = {
  entry: './src/game.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, use: 'raw-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};