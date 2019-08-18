const http = require('http');
const path = require('path');
const fs = require('fs');
// const EventEmitter = require('events');

const server = http.createServer((req, res) => {
  // // serves index.html file
  // if (req.url === '/') {
  //   const homePage = path.join(__dirname, 'public', 'index.html');
  //   fs.readFile(
  //     homePage,
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content);
  //     });
  // }

  // // setting up api
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'dustin', age: 27 },
  //     { name: 'dustin jr', age: 37 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // extension of file
  let extname = path.extname(filePath);

  // // content type
  let contentType; // string

  // check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    default:
      contentType = 'text/html';
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // page not found
        const page404 = path.join(__dirname, 'public', '404.html');
        fs.readFile(page404, (err, content) => {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(content, 'utf8');
        });
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server error: ${err}`);
      }
    } else {
      // success
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`port listening on port ${PORT}`));
