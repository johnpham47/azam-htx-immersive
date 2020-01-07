const express = require("express");
const app = express();

// Connect to PostgreSQL daatabase
var pgp = require("pg-promise")();
// var connectionString = "postgres://localhost:5432/Example";
var connectionString = {
  host: "localhost",
  port: 5432,
  database: "Example",
  username: "postgres",
  password: "Iffritman56"
};
var db = pgp(connectionString);
db.any("select * from posts").then(results => console.log(results));

app.get("/posts", (req, res) => {
  db.connect(); //("SELECT post_id, title, body FROM posts;").then(results =>
  //console.log(results)//
  //);
});

app.listen(3000, () => {
  console.log("Server is running");
});
