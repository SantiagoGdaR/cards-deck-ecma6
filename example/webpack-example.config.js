var path = require('path');

module.exports = {
  context: path.resolve('example'),
	entry: './exampleCardsDeck',
	output: {
    path: path.resolve('example/build/'),
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
    contentBase: 'example'
  },
  resolve: {
    extensions: ['*', '.js']
  },
  watch: true
}
