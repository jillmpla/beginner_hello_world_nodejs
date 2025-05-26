//nodejsserver.js
//this script creates a basic HTTP server using Node's built-in 'http' module
const http = require("http");

//create an HTTP server that sends a plain text response
const server = http.createServer((req, res) => {
  //set status code to 200 (OK) and content type to plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  //send the response body and end the request
  res.end("Hello, World from NodeJS Server!");
});

//listen on port 3001 to avoid port conflict with other servers
server.listen(3001, () => {
  console.log("Node.js server is running at http://localhost:3001");
});

