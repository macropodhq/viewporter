var webpack = require('webpack');

var config = module.exports = {
  bail: true,
  cache: false,
  debug: true,
  devServer: {
    contentBase: 'src/__browser__',
    port: process.env.PORT || 8080,
  },
  devtool: 'inline-source-map',
  entry: {
    'viewporter': './test',
  },
  output: {
    path: __dirname + '/test',
    filename: '[name].js',
    publicPath: '/lib/',
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?experimental&optional=runtime'],
      },
    ],
  },
};
