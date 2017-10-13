var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(process.cwd(), 'public');

// We point to our static assets
app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {
  app.get('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

// And run the server
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
