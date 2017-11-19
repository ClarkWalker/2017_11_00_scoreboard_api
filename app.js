const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// get and use routes
const apiRoute = require('./routs/api.js')
// here's your sign
app.listen(port, () => {
  console.log('Hi there gamer');
});
