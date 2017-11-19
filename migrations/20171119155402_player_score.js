
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('player_score', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('score');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('player_score')
  ]);
};
