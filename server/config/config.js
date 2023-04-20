const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'eccom',
  user: 'postgres',
  password: '1997'
});

db.one('SELECT $1 AS value', 'psql running successfully')
  .then((data) => {
    console.log( data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

module.exports = {
  pgp,
  db,
};


// require("dotenv").config();

// const { Pool } = require("pg");

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction
// });

// pool.query('SELECT $1 AS value', ['psql running successfully'])
//   .then((data) => {
//     console.log(data.rows[0].value);
//   })
//   .catch((error) => {
//     console.log('ERROR:', error);
//   });

// module.exports = { pool };