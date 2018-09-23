const mysql = require("mysql");
const config = require("./config");

const database = mysql.createConnection({
  host : config.db.host,
  user : config.db.user,
  port : config.db.post,
  password : config.db.password,
  database : config.db.database
});

database.connect();

module.exports = database;