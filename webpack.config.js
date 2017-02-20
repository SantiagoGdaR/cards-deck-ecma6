var path = require('path');

module.exports = {
  context: path.resolve('js'),
	entry: './deck',
	output: {
    path: path.resolve('build/'),
  	filename: 'bundle.js'
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
