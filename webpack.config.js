module.exports = {
  mode: `development`,
  entry: {
    index: './source/js/index.js',
    swiper: './source/js/swiper.js',
    form: './source/js/form.js',
    call: './source/js/call.js'
  },
  output: {
    filename: `[name].bundle.js`,
    sourceMapFilename: '[name].bundle.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devtool: `source-map`,
};
