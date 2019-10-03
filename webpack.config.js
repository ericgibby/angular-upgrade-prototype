const path = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');

module.exports = {
	module: {
		rules: [
			// Necessary to be able to use AngularJS with Webpack as explained in https://github.com/webpack/webpack/issues/2049
			{
				test: require.resolve('angular'),
				use: {
					loader: 'exports-loader?window.angular'
				}
			},
			{
				test: /\.html$/,
				exclude: [path.resolve(__dirname, 'src', 'app'), path.resolve(__dirname, 'src', 'index.html')],
				use: [
					{
						loader: 'ngtemplate-loader',
						options: {
							module: 'app.templates',
							relativeTo: 'src/'
						}
					},
					{
						loader: 'html-loader',
						options: {
							attrs: false,
							minimize: false,
							removeComments: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new ProvidePlugin({
			angular: 'angular'
		}),
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'local')
		})
	]
};
