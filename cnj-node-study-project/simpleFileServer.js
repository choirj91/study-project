const port = 3004; // Port number
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const STATIC_FOLDER = 'public'; // Read the files under the public folder by default
const IS_OPEN_CACHE = true; // Whether to turn on the caching function
const CACHE_TIME = 10;// Tell the browser how long you can avoid requesting the server in seconds.

const server = http.createServer((req, res) => {
  const obj = url.parse(req.url); // url for parsing requests
  let pathname = obj.pathname; // Path of request
  if (pathname === '/') {
    pathname = './index.html';
  }
  const realPath = path.join(__dirname, STATIC_FOLDER, pathname); // Getting physical paths

  // Get basic information about files, including size, creation time, modification time, etc.
  fs.stat(realPath, (err, stats) => {
    let endFilePath = '', contentType = '';
    if (err || stats.isDirectory()) {
      // If an error is reported or the requested path is a folder, 404 is returned.
      res.writeHead(404, 'not found', {
        'Content-Type': 'text/plain'
      });
      res.write(`the request ${pathname} is not found`);
      res.end();
    } else {
      let ext = path.extname(realPath).slice(1); // Get the file extension name
      contentType = mime.getType(ext) || 'text/plain';
      endFilePath = realPath;

      if (!IS_OPEN_CACHE) {
        // Unopened cache
        let raw = fs.createReadStream(endFilePath);
        res.writeHead(200, 'ok');
        raw.pipe(res);
      } else {
        // Get the last modification time of the file and convert the time into a world time string
        let lastModified = stats.mtime.toUTCString();
        const ifModifiedSince = 'if-modified-since';

        // Tell the browser what time to use the browser cache without asking the server directly, but it seems that it is not effective, and needs to learn why.
        let expires = new Date();
        expires.setTime(expires.getTime() + CACHE_TIME * 1000);
        res.setHeader("Expires", expires.toUTCString());
        res.setHeader('Cache-Control', 'max-age=' + CACHE_TIME);

        if (req.headers[ifModifiedSince] && lastModified === req.headers[ifModifiedSince]) {
          // If the request header contains the request ifModifiedSince and the file is not modified, it returns 304
          res.writeHead(304, 'Not Modified');
          res.end();
        } else {
          // Return the header Last-Modified for the last modification time of the current request file
          res.setHeader('Last-Modified', lastModified);

          // Return file
          let raw = fs.createReadStream(endFilePath);
          res.writeHead(200, 'ok');
          raw.pipe(res);
        }
      }
    }
  });
});

server.listen(port);
console.log(`server is running at http://localhost:${port}`)