const express = require('express');
const router = express.Router();
const db = require('../database/queries.js'); // possable no js at the end

// get request to /
router.get('/', (req, res, next) => {
  // res.send('eureka') // confirmed in postman
  db.getAllData()
  .then((data) => {
    res.send(data);
  });
});

//
router.post('/', (req, res, next) => {
  console.log('req.body\n', req.body);
  db.newPlayer(req.body)
  .then((data) => {
    /**/
    db.getAllData()
    .then((data) => {
      res.send(data);
    });
    /*/
    res.send(data);
    /**/
  });
});

//
router.get('/player:id', (req, res, next) => {
  console.log('req.body\n', req.params);
  getPlayerId(req.params.id)
  .then((data) => {
    res.send(data)
  })
})

// solved-- TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
