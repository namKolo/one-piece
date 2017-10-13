import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../internal/webpack/dev';

export const devLayer = app => {
  const compiler = webpack(webpackConfig);
  /*
    Attach webpack-dev-middleware to our server to bundle app and hot reload
  */
  const devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    stats: {
      colors: true
    }
  });
  app.use(devMiddleware);

  /*
    We build own server to bundle files instead of using webpack-dev-server. Therefore, we need
    to attach webpack-hot-middleware too to enable HMR on the server
  */
  const hotMiddleware = webpackHotMiddleware(compiler);
  app.use(hotMiddleware);

  /*
    Our bundled files are kept in the memory. Therfore we need to use built-in fs to read
    that file and send to client
  */
  const fs = devMiddleware.fileSystem;
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
