// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/cws_scoreboard_api'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
