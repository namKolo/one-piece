import webpack from 'webpack';
import path from 'path';

import merge from 'webpack-merge';
import baseConfig from './base';

const sourcePath = path.resolve(process.cwd(), 'app/index.js');

export default merge(baseConfig, {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', sourcePath],
  target: 'web',
  output: {
    path: '/',
    publicPath: '/public/build',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    })
  ]
});
