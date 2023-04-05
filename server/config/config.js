const pgp = require("pg-promise")();
const db = pgp("postgresql://postgres:1997@localhost:5432/eccom");

db.one('SELECT $1 AS value', 'psql running successfully')
  .then((data) => {
    console.log( data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

module.exports = {db };
