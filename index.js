const http = require('http');
const fs = require('fs');

const port = 8080;

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', function (err, data) {
      try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
      } catch {
        throw err;
      }
    });
  } else if (req.url === '/about') {
    fs.readFile('about.html', function (err, data) {
      try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
      } catch {
        throw err;
      }
    });

  } else if (req.url === '/contact') {
    fs.readFile('contact.html', function (err, data) {
      try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
      } catch {
        throw err;
      }
    });

  } else {
    fs.readFile('404.html', function (err, data) {
      try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end;
      } catch {
        throw err;
      }
    });
  }
}).listen(port); 