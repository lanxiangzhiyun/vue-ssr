'use strict';

const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

let skeletonWebpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: {
    app: resolve('../src/entry-skeleton.js')
  },
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2'
  }),
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'less-loader'],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: []
});

// important: enable extract-text-webpack-plugin
// skeletonWebpackConfig.module.rules[0].options.loaders = utils.cssLoaders({
//   sourceMap: true,
//   extract: true
// });

module.exports = skeletonWebpackConfig;
