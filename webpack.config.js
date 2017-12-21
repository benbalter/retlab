var webpack = require('webpack');

module.exports = {
  entry: ['anchor-js', 'turbolinks', './assets/js/script.js'],
  output: {
    filename: './assets/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
