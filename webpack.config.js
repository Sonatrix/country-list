const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'country-data-list.js',
    path: path.resolve(__dirname, 'dist')
  }
};