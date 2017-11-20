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
    db.getAllData()
    .then((data) => {
      res.send(data);
    });
  });
});

// gets one player
router.get('/player/:id', (req, res, next) => {
  console.log('req.params\n', req.params.id);
  db.getPlayerId(req.params.id)
  .then((data) => {
    res.send(data[0]);
  });
});

// // update a score of a specific player
// router.put('/player/score/:id', (req, res, next) => {
//   console.log('/player/score/:id');
//   db.getPlayerId(req.params.id)
//   .then((playerData) => {
//     playerData[0].score = Number(req.body.score)
//     db.updatePlayerScore(req.body, req.params)
//     res.send(playerData[0]);
//   });
// });

// update a score of a specific player
router.patch('/player/score/:id', (req, res, next) => {
  console.log(`/player/score/${req.params.id}`);
  db.getPlayerId(req.params.id)
  .then((playerData) => {
    playerData[0].score = Number(req.body.score)
    db.updatePlayerScore({score: playerData[0].score}, req.params.id)
    .then((data) => {
      res.send(playerData[0]);
    });
  });
});

// fixes TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
