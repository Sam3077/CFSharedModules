module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: '/bundle.js'
	},
	module: {
		loader: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	watch: true
};
