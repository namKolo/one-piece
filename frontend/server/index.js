import { devLayer } from './middleware';

var express = require('express');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

// We only want to run the workflow when not in production
if (!isProduction) {
  devLayer(app);
}

// And run the server
const server = app.listen(port, function() {
  server.keepAliveTimeout = 0;
  console.log('Server running on port ' + port);
});
