const path = require('path');
const webpack = require('webpack');
var $ = require("jquery");

const plugins = [
    new webpack.ProvidePlugin({
      'window.jQuery': '$'
    })
  ]
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
    ],
  },
   plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
    ],
    resolve: {
      alias: {
          'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
      }
    }
}