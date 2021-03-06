// Karma configuration
// Generated on Sun Dec 21 2014 11:02:17 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm','jasmine'],


    // list of files / patterns to load in the browser
    files: [

    ],

    jspm: {
      loadFiles: [
        'src/**/*.js',
        'test/unit/*.js'
      ],
      serveFiles: [
        'jspm_packages/**/*'
      ]
    },


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/unit/**/*.js': ['babel']
    },
    'babelPreprocessor': {
      options: {
        sourceMap: true,
        modules: 'system',
        sourceMapName: '',
        sourceRoot: '',
        moduleRoot: '',
        moduleIds: false,
        experimental: false,
        comments: false,
        compact: false,
        code:true,
        stage:0
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome','Firefox'],
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
