var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

var server = app.listen(3000, function() {
  console.log('App listening on localhost port %s', server.address().port);
});
