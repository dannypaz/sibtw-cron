/**
 * @summary DB configuration file for Knex
 */

require('dotenv').config();

const pg = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: 'localhost',
    database: 'sibtw-cron',
  },
};

module.exports = pg;
