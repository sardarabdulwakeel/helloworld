// Import required modules
const express = require('express');
const app = express();

// Define the port to run the server
const port = 3000;

// Home route (GET request to '/')
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// About route (GET request to '/about')
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
