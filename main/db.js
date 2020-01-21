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
//     client:'pg',
//     connection:'postgres://wkvxzjrpvafazl:0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff@ec2-54-174-229-152.compute-1.amazonaws.com:5432/d7vn6cbq9dl4qh',
//     user: 'wkvxzjrpvafazl',
//     host: 'ec2-54-174-229-152.compute-1.amazonaws.com',
//     database: 'd7vn6cbq9dl4qh',   // remember to change name of db accordingly
//     password: '0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff',
//     port: 5432,
//     ssl: true
  
// })

// module.exports = pool

// const { Client } = require('pg');

// const client = new Client({
//     connection: 'postgres://wkvxzjrpvafazl:0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff@ec2-54-174-229-152.compute-1.amazonaws.com:5432/d7vn6cbq9dl4qh',
//     ssl: true,
//     // user: 'wkvxzjrpvafazl',
//     // host: 'ec2-54-174-229-152.compute-1.amazonaws.com',
//     // database: 'd7vn6cbq9dl4qh',   // remember to change name of db accordingly
//     // password: '0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff',
//     // port: 5432,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

// module.exports = client


