const mySql = require("mysql");

var connection = mySql.createConnection({
  host: "localhost",
  user: process.env.USER, //pass your database user
  password: process.env.DB_PASSWORD, //pass your database password
  database: process.env.DB_NAME, //pass your database name in this case 'turnStyle'
  dialect: "mysql",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting database: " + err);
    return;
  }

  console.log("Database connected ");
});

module.exports = connection;
