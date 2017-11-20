const knex = require('./connection');

// gets all data from player_score table
function getAllData() {
  return knex('player_score');
}

function getPlayerId(id) {
  return knex('player_score')
  .select()
  .where('id', id);
}

function newPlayer(data) {
  return knex('player_score')
  .insert(data);
}

function updatePlayerScore(newScore, playerId) {
  return knex('player_score')
  .update(newScore)
  .where('id', playerId);
}

module.exports = {
  getAllData,
  getPlayerId,
  newPlayer,
  updatePlayerScore,
};
