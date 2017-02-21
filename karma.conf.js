var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        {
          pattern: 'test-context.js',
          watched: false
        }
    ],
    reporters: ['mocha'],
    preprocessors: {
        'test-context.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    }
  })
}
