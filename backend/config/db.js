const {Pool} = require('pg');

const pool = new Pool({
  user: 'ozzy.lievano',
  host: 'localhost',
  database: 'mirage',
  password: 'haven1235!',
  port : 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};