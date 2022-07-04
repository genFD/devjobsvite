const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'main',
  host: 'localhost',
  database: 'jobs',
  password: 'password',
  port: 5432,
});
