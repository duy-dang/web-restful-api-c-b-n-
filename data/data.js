const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apirestful',
  password: '0967216299',
  port: 5432,
})
module.exports = pool;