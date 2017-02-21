var path = require('path');

module.exports = {
  context: path.resolve('js'),
	entry: './cardsDeck',
	output: {
    path: path.resolve('build/'),
  	filename: 'cardsDeck.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: 'public'
  },
  resolve: {
    extensions: ['*', '.js']
  },
  watch: true
}
