////////////// This is the code for the Express.js server (BACKEND) //////////////

// Import the Express package
const express = require('express');
const path = require('path');
const eventEmitter = require('events');

// Create an Express application
const app = express();
app.use(express.json());  // uses the specified middleware to parse JSON data  

const myEmitter = new eventEmitter(); // instantiating an instance of emitter

// Define the port where the server will listen
const port = 3000;

// Event listener for 'userAction' event
myEmitter.on('userAction', (action) => {
  console.log(`User performed action: ${action}`);
});

// Define a route for the root URL ("/")
// When a GET request is made to path '/', this function is triggered
app.get('/', (req, res) => {          //  "req" and "res" are the callback objects, request and response
  
  // accessing "/" (the root) is the action event, which will trigger the "userAction" event
  myEmitter.emit("userAction", "/");

  // Respond with a simple message
  res.send('Hello, Node.js World!');

  // 1) The user accesses the root URL ("/")
  // 2) The server triggers the 'userAction' event with the action "/"
  // 3) The server responds with a message "User performed action: /" to console
  // 4) The server responds with a message "Hello, Node.js World!" to the client on web browser

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

// Define a route for the '/data' URL. This route returns a JSON response
app.get('/data', (req, res) => {
  res.send({ message: 'This is a JSON response' });
});

// Define a route for the '/explorer' URL that links and displays the index.html file
app.get('/explorer', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route for the '/data' URL that accepts POST requests
app.post('/data', (req, res) => {
  const payload = req.body;   // the app.use middleware is used here to parse the JSON data
  console.log(payload);
  res.send({ message: 'This is a POST request: ' + payload.data }); // We are displaying the payload here
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});