var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: ""
});

con.connect(function(err) {
  if (err)
  	console.log("not connected!");
  else
  	console.log("Connected!");
});