// Karma configuration
// Generated on Wed Sep 18 2019 16:28:57 GMT-0600 (Mountain Daylight Time)

const webpackConfig = require('./webpack.config')(process.env, {});

module.exports = function(config) {
	const webpack = Object.assign({}, webpackConfig, {
		devtool: 'cheap-module-eval-source-map',
		plugins: webpackConfig.plugins.filter(
			plugin => !plugin.options || !plugin.options.filename || !plugin.options.filename === 'index.html'
		)
	});
	delete webpack.entry;

	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: ['src/test.entry.js', 'src/**/*.{spec,test}.js'],
		// files: ['src/test.entry.js'],

		// list of files / patterns to exclude
		// exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'src/test.entry.js': ['webpack', 'sourcemap'],
			// 'src/**/*.{spec,test}.js': ['webpack', 'sourcemap']
			'src/**/*.{spec,test}.js': ['babel']
		},

		webpack,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		babelPreprocessor: {
			options: {
				presets: ['@babel/preset-env'],
				plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'],
				sourceMap: 'inline'
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'],

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
		browsers: [
			// 'Chrome'
			'ChromeHeadless'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		beforeMiddleware: ['webpackBlocker']
	});
};
