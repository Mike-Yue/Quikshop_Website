var express = require('express');
var app = express();
var path = require("path");
var mysql = require("mysql");

app.use(express.static('Script'));

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "lily0206", 
	database: "blocks"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected!");

	con.query("SELECT * FROM blockchain", function(err, result, fields){
		if(err) throw err;
		console.log(result);
	});
});

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8080);

