// connects database to server

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'database1',   // remember to change name of db accordingly
  password: 'Jacki3mich',
  port: 5432
})

module.exports = pool

// const { Pool } = require('pg')

// const pool = new Pool({
//   user: 'okbjhrluewrbuz',
//   host: 'ec2-107-21-214-101.compute-1.amazonaws.com',
//   database: 'db7m1m1nr053r0',   // remember to change name of db accordingly
//   password: '84b2fadfdd2415538f55032d52ca6b8c382053360307afc11bfdf2d902c15169',
//   port: 5432,
//   connection:'postgresql://okbjhrluewrbuz:84b2fadfdd2415538f55032d52ca6b8c382053360307afc11bfdf2d902c15169@ec2-107-21-214-101.compute-1.amazonaws.com:5432/db7m1m1nr053r0'
// })

// module.exports = pool


// require('dotenv').config()

// const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
// })

// module.exports = {pool}