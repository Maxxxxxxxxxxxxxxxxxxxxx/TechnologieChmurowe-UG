// Require the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'text/plain');

  // Send the response
  res.end('Hello world\n');
});

// Start the server and listen on port 3000
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
