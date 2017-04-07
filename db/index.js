// set up database
const pgp = require('pg-promise')();

const db = pgp(
  process.env.DATABASE_URL || 'postgres://digitalmediaflow@localhost:5432/walmart');


module.exports = db;
