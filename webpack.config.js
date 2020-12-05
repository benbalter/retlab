const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./js/script.ts', './sass/_retlab.scss'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/bundle.js'
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({filename: 'css/style.css'})
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader'
        }]
      }
    ]
  }
};
