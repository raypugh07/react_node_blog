// connects database to server

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Jacki3mich',
  post: 5432
})

module.exports = pool