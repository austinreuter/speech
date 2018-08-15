var webpack = require('webpack');
var path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/client/dist')

module.exports = {
	entry: `${SRC_DIR}/index.js`,
	module: {
		rules: [
		  {
			  test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	output: {
    path: DIST_DIR,
    filename: 'bundle.js'
	},
	devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true
	}
}