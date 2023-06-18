const mysql = require("mysql"); //require mysql
const dotenv = require("dotenv"); //hides all sensitive data
dotenv.config({ path: "./.env" });

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD, //amazing password :)
});

con.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL.");
});
