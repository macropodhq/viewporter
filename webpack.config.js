var webpack = require('webpack');
var postcssVars = require('postcss-simple-vars');
var postcssMath = require('postcss-math');
var postcssPxToEm = require('postcss-px-to-em');

var release = (process.env.NODE_ENV === 'production');

var plugins = [];

if (release) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      // This has effect on the react lib size
      'NODE_ENV': JSON.stringify('production'),
    },
  }));

  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

var config = module.exports = {
  debug: true,
  cache: true,
  devtool: true && 'source-map',
  entry: {
    'app': './app',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.mcss'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?experimental&optional=runtime'],
      },
      {
        test: /\.mcss$/,
        loaders: [
          'style-loader',
          'css-loader?-minimize&module',
          'postcss-loader',
        ],
      },
      {test: /\.gif$/, loader: 'file-loader'},
    ],
  },
  postcss: [
    postcssVars(),
    postcssMath,
    postcssPxToEm(),
  ],
};
