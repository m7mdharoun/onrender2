var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'http://pastes.io'});
  res.end();
}).listen(8888);
