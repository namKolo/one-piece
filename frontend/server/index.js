import express from 'express';

import config from '../config/index';
import { devLayer } from './middleware';

var app = express();

const isDevelopment = config.env !== 'production';
const port = config.server.port;

if (isDevelopment) {
  devLayer(app);
}

// And run the server
const server = app.listen(port, function() {
  server.keepAliveTimeout = 0;
  console.log('Server running on port ' + port);
});
