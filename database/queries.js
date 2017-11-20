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

module.exports = {
  getAllData,
  getPlayerId,
  newPlayer,
};
