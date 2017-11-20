const express = require('express');
const router = express.Router();
const db = require('../database/queries.js'); // possable no js at the end

// gets all players
router.get('/', (req, res, next) => {
  console.log(`get: /`);
  db.getAllData()
  .then((data) => {
    res.send(data);
  });
});

// gets one player
router.get('/player/:id', (req, res, next) => {
  console.log(`get: /player/${req.params.id}`);
  db.getPlayerId(req.params.id)
  .then((data) => {
    res.send(data[0]);
  });
});

// creates a new player
router.post('/', (req, res, next) => {
  console.log('post: /');
  db.newPlayer(req.body)
  .then((data) => {
    db.getAllData()
    .then((data) => {
      res.send(data);
    });
  });
});

// update a score of a specific player
router.patch('/player/score/:id', (req, res, next) => {
  console.log(`patch: /player/score/${req.params.id}`);
  db.getPlayerId(req.params.id)
  .then((playerData) => {
    playerData[0].score = Number(req.body.score);
    db.updatePlayerScore({score: playerData[0].score}, req.params.id)
    .then((data) => {
      res.send(playerData[0]);
    });
  });
});

// deletes a player entry from the table
router.delete('/player/:id', (req, res, next) => {
  console.log(`delete/player/${req.params.id}`);
  db.getAllData()
  .then((data) =>  {
    db.deletePlayer(req.params.id)
    .then((nothing) => {
      res.send(data);
    });
  });
});

// fixes TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
