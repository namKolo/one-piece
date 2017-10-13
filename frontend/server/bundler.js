import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from '../internal/webpack/dev';

var bundleStart = null;
var compiler = Webpack(webpackConfig);

compiler.plugin('compile', function() {
  console.log('Bundling...');
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var bundler = new WebpackDevServer(compiler, {
  publicPath: '/build/',
  quiet: false,
  noInfo: true,
  stats: {
    colors: true
  }
});

bundler.listen(8080, 'localhost', function() {
  console.log('Bundling project, please wait...');
});
