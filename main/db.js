// connects database to server

// const { Pool } = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'database1',   // remember to change name of db accordingly
//   password: 'Jacki3mich',
//   port: 5432
// })

// module.exports = pool

const { Pool } = require('pg')

const pool = new Pool({
  user: 'wkvxzjrpvafazl',
  host: 'ec2-54-174-229-152.compute-1.amazonaws.com',
  database: 'd7vn6cbq9dl4qh',   // remember to change name of db accordingly
  password: '0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff',
  port: 5432,
  connection:'postgres://wkvxzjrpvafazl:0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff@ec2-54-174-229-152.compute-1.amazonaws.com:5432/d7vn6cbq9dl4qh'
})

module.exports = pool


// require('dotenv').config()

// const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
// })

// module.exports = {pool}