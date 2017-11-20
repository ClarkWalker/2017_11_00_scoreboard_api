const db = require('./connection');

// gets all data from player_score table
function getAllData() {
  return db('player_score');
}

module.exports = {
  getAllData,
};
