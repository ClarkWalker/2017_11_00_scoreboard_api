const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// get and use routes
const apiRoute = require('./routes/api.js');
app.use('/', apiRoute);

// here's your sign
app.listen(port, () => {
  console.log('Hi there gamer');
});
