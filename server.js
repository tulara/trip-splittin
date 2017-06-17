const port = 8000
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


const projectRoot = path.dirname(fs.realpathSync(__filename));

http.createServer((request, response) => {
  const pathname = url.parse(request.url).pathname;

  if(pathname === "/"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(projectRoot + "/index.html").pipe(response);
    return;
  }
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write("Sorry bro, couldn't find that");
  response.end();
}).listen(port, 'localhost');

console.log('band new server thingo running on port ' + port);
