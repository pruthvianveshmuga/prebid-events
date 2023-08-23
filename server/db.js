const postgres = require("postgres");

// todo: move these values to .env file
const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "postgres",
});

module.exports = { sql };
