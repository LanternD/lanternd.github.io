var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/lanternd.js',
  output: {
    filename: 'lanternd.js',
    path: path.resolve(__dirname, 'js')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery"
     })
  ]

};