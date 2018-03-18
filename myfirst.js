var express = require('express');
var app = express();
var path = require("path");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var i;
var blockNum = [];
var nonce = [];
var data = [];
var prevHash = [];
var currHash = [];

app.use(express.static('Script'));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({extended: true}));

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
	blockNum.length = 0;
	nonce.length = 0;
	data.length = 0;
	prevHash.length = 0;
	currHash.length = 0;

	con.query("SELECT * FROM blockchain", function(err, result, fields){
		if(err) throw err;
		for(i = 0; i < result.length; i++){
			blockNum[i] = result[i].number;
			nonce[i] = result[i].nonce;
			data[i] = result[i].data;
			prevHash[i] = result[i].prev_hash;
			currHash[i] = result[i].curr_hash;
		}
    	res.render("pugprac", {
    		blockNum, nonce, data, prevHash, currHash
    	});
		});
	});
});

app.get('/search', function(req, res){
	var input = req.query.name;
	var dynamicInput = '%'.concat(input.concat('%'));
	con.connect(function(err){

	con.query("SELECT * FROM blockchain WHERE data LIKE ?", [dynamicInput], function(err, result, fields){
		if(err) throw err;

		blockNum.length = 0;
		nonce.length = 0;
		data.length = 0;
		prevHash.length = 0;
		currHash.length = 0;

		for(i = 0; i < result.length; i++){
			blockNum[i] = result[i].number;
			nonce[i] = result[i].nonce;
			data[i] = result[i].data;
			prevHash[i] = result[i].prev_hash;
			currHash[i] = result[i].curr_hash;
		}
		res.render("pugprac", {
    		blockNum, nonce, data, prevHash, currHash
    		}); 
		});
	});

});


app.listen(8080);

