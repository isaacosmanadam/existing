// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("Hello, world!");
//#endregion
