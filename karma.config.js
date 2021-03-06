module.exports = function (config) {
  var browsers = ['Chrome']

  config.set({
    singleRun: false,
    browsers: browsers,
    client: { clearContext: false },
    frameworks: ['jasmine'],

    files: ['./src/index.spec.js'],

    reporters: ['progress', 'kjhtml'],

    preprocessors: {
      './src/index.spec.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: require('./webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    coverageReporter: {
      type: 'json',
      subdir: '.',
      dir: 'build/coverage/',
      file: 'coverage.json'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-jasmine-html-reporter'),
      require('karma-spec-reporter')
    ]
  })
}
