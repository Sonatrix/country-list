const path = require('path')

module.exports = {
  entry: './browser.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'country-data-list.min.js',
    library: {
      name: 'CountryDataList',
      type: 'window'
    }
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheCompression: true
        }
      }
    ]
  }
}