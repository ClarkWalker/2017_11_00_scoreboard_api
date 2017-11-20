const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// json friendly
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// get and use routes
const apiRoute = require('./routes/api.js');
app.use('/', apiRoute);

// here's your server and sign
app.listen(port, () => {
  console.log('Hi there gamer');
});
