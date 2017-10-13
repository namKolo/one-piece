import path from 'path';

import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseConfig from './base';

const sourcePath = path.resolve(process.cwd(), 'app/index.js');

export default merge(baseConfig, {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', 'webpack-hot-middleware/client', 'react-hot-loader/patch', sourcePath],
  target: 'web',
  output: {
    path: '/build/',
    publicPath: '/build/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    // enable hot reload webpack feature
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true,
      env: 'development'
    })
  ]
});
