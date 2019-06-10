const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		// hot: true,
		// hotOnly: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, 
				loader: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // 将 JS 字符串生成为 style 节点
				}, {
					loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
				}, {
					loader: "sass-loader" // 将 Sass 编译成 CSS
				}]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './src/index.html'
		}),
		// new webpack.HotModuleReplacementPlugin()
	],
	output: {
		// publicPath: 'http://cdn.com.cn',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}