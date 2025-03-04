// Import the Express package
const express = require('express');

// Create an Express application
const app = express();

// Define the port where the server will listen
const port = 3000;

// Define a route for the root URL ("/")
// When a GET request is made to path '/', this function is triggered
app.get('/', (req, res) => {          //  "req" and "res" are the callback objects, request and response
  // Respond with a simple message
  res.send('Hello, Node.js World!');
});

// (req, res) can be written as a function:
// (req, res) => {          //  "req" and "res" are the callback objects, request and response
//   // Respond with a simple message
//   res.send('Hello, Node.js World!');
// };

// An additional route to demonstrate asynchronous behavior
app.get('/async', (req, res) => {
  // Simulate an asynchronous operation using setTimeout.
  setTimeout(() => {
    res.send('This response was delayed by 1 second, showing non-blocking behavior!');
  }, 1000);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});