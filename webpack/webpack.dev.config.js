var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
    path.join(parentDir, 'client/index.js')

	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	output: [
    path: path.join(parentDir, 'client/dist'),
    filename: 'bundle.js'
	],
	devServer: {
    contentBase: path.join(parentDir, 'client/dist'),
    historyApiFallback: true
	}
}