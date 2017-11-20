const express = require('express');
const router = express.Router();
const db = require('../database/queries.js'); // possable no js at the end

router.get('/', (req, res, next) => {
  // res.send('eureeka') // confirmed in postman
  db.getAllData()
  .then((data) => {
    let it = {
      data: data
    };
    res.send(it);
  });
});

// solved-- TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
