const http = require('http');
const EventEmitter = require('events');

// create server object
http.createServer((req, res) => {
  // write a response
  res.write('hello world');
  res.end();
}).listen(5000, () => console.log('server running on port 5000'));