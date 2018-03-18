var express = require('express');
var app = express();
var path = require("path");
var mysql = require("mysql");
var i;
var blockNum = [];
var nonce = [];
var data = [];
var prevHash = [];
var currHash = [];

app.use(express.static('Script'));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "lily0206", 
	database: "blocks"
});


/*app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
}); */

app.get('/', function (req, res) {
	con.connect(function(err){

	con.query("SELECT * FROM blockchain", function(err, result, fields){
		if(err) throw err;
		for(i = 0; i < result.length; i++){
			blockNum[i] = result[i].number;
			nonce[i] = result[i].nonce;
			data[i] = result[i].data;
			prevHash[i] = result[i].prev_hash;
			currHash[i] = result[i].curr_hash;
		}
		console.log(result);
		});
	});
    res.render("pugprac", {
    	blockNum, nonce, data, prevHash, currHash
    });
});


app.listen(8080);

