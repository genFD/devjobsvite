const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'hermann',
  host: 'localhost',
  database: 'jobs',
  password: 'password',
  port: 5432,
});

module.exports = pool;