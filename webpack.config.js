const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');

const dist = path.join(__dirname, 'dist');

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		devServer: {
			contentBase: dist,
			port: 8080,
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': '*'
			}
		},
		devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
		entry: './src/index.js',
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
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
						}
					}
				},
				{
					test: /\.html$/,
					exclude: [path.resolve(__dirname, 'src', 'index.html')],
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
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		optimization: isProduction
			? {
					splitChunks: {
						cacheGroups: {
							vendor: {
								test: /[\\/]node_modules[\\/]/,
								name: 'vendor',
								chunks: 'all'
							}
						}
					}
			  }
			: undefined,
		output: {
			filename: isProduction ? '[name].[contenthash].js' : '[name].js',
			path: dist
		},
		plugins: [
			isProduction && new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: 'index.html'
			}),
			new ProvidePlugin({
				angular: 'angular'
			}),
			new DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'local')
			})
		].filter(plugin => !!plugin)
	};
};
