import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../internal/webpack/dev';

export const devLayer = app => {
  const compiler = webpack(webpackConfig);
  const devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/build/',
    hot: true,
    quiet: false,
    stats: {
      colors: true
    }
  });
  const hotMiddleware = webpackHotMiddleware(compiler);

  const fs = devMiddleware.fileSystem;
  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });

  return app;
};
