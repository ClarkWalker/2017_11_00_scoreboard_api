const knex = require('./connection');

// gets all data from player_score table
function getAllData() {
  return knex('player_score');
}

// gets a player by their id
function getPlayerId(id) {
  return knex('player_score')
  .select()
  .where('id', id);
}

// creates a new player
function newPlayer(data) {
  return knex('player_score')
  .insert(data);
}

// updates a players score
function updatePlayerScore(newScore, playerId) {
  return knex('player_score')
  .update(newScore)
  .where('id', playerId);
}

// deletes a player
function deletePlayer(playerId) {
  return knex('player_score')
  .del()
  .where('id', playerId);
}

module.exports = {
  getAllData,
  getPlayerId,
  newPlayer,
  updatePlayerScore,
  deletePlayer
};
