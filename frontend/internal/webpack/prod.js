import webpack from 'webpack';
import path from 'path';

import merge from 'webpack-merge';
import baseConfig from './base';

const sourcePath = path.resolve(process.cwd(), 'app/index.js');
const buildPath = path.resolve(process.cwd(), 'public/build');

export default merge(baseConfig, {
  devtool: 'source-map',
  entry: ['babel-polyfill', sourcePath],
  target: 'web',
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: true
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ]
});
