// Require's 
const express = require('express');
const cors = require('cors');
const fallback = require('express-history-api-fallback');

//Instances Creation
const app = new express();

// Request Response Configuration
app.use(cors());
app.use(express.static('dist'))

app.use(fallback(__dirname + '/dist/index.html'));

//Server Starts
app.listen(80, '0.0.0.0', () => {
    console.log("Server Started");
});