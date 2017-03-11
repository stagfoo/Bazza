const path = require('path');
const webpack = require('webpack');

const plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ];

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
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
    ]
  },
  plugins: plugins,
    devServer: {
      overlay: {
        errors: true,
        warnings: true
      },
      historyApiFallback: {
        index: 'index.html'
      }
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ]
  }
}