// webpack.config.js
module.exports = {
	entry: './public/assets/js/app.js',
	mode: 'development',
	output: {
	  path: __dirname,
	  filename: './public/assets/js/bundle.js'
	},
	// module: {
	//   loaders: [
	// 	{
	// 	  test: /\.sass$/,
	// 	  loader: 'style!css!sass'
	// 	}, {
	// 	  test: /\.js$/,
	// 	  loader: 'babel',
	// 	  exclude: /(node_modules|bower_components)/,
	// 	  query: {
	// 		presets: ['es2015']
	// 	  }
	// 	}
	//   ]
	// }
  }