// Karma configuration
// Generated on Wed Jun 24 2015 16:06:06 GMT+0800 (SGT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "www/lib/ionic/js/ionic.bundle.js",
      "www/lib/angular-mocks/angular-mocks.js",
      "www/lib/ng-cordova-0.1.17-alpha/dist/ng-cordova.js",
      "www/lib/jr-crop-master/dist/jr-crop.js",
      "www/lib/angular-ui-calendar/src/calendar.js",
      "www/lib/pouchdb/pouchdb-3.6.0.min.js",
      "www/js/app.js",
      "www/js/account/addAccount.js",
      "jasmine/spec/accountControllerSpec.js"

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    //set browser inactivity timeout to 30000s
    browserNoActivityTimeout: 30000
  })
}
