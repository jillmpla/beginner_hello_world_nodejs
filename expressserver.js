//expressserver.js
//this script creates a simple web server using the Express framework
const express = require("express");
const app = express();

//define a route for GET requests to the root path ('/')
app.get("/", (req, res) => {
  //send a plain text response
  res.send("Hello, World from Express!");
});

//use port 3002 to avoid conflict with nodejsserver
const PORT = 3002;

//start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
