
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_score').del()
    .then(function () {
      // Inserts seed entries
      return knex('player_score').insert([
        {
          // id: 1,
          name: 'clark',
          score: 55
        },
        {
          // id: 2,
          name: 'bob',
          score: 234
        },
        {
          // id: 3,
          name: 'fred',
          score: 76
        }
      ]);
    });
};
