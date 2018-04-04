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
app.use(bodyParser.json());

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "lily0206", 
	database: "blocks"
});

app.get('/', function(req, res){
	res.render('welcome');
});

app.get('/contactus', function(req, res){
	res.render('contact');
});

//To add onto this implementation, I will need to add input sanitization for unique block numbers, set lengths on hashes etc etc
app.post('/post', function(req, res){
	var insertData = [
		[req.body.number, req.body.nonce, req.body.data, req.body.prev_hash, req.body.curr_hash]
	];
	con.query("INSERT INTO blockchain VALUES ?", [insertData], function(err, result){
		if(err) throw err;
		console.log("Number of records affected: " + result.affectedRows);
	});
});

app.get('/test', function(req, res){
	res.render("bootstrap_html");
});

app.get('/blockchain', function (req, res) {
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
    	res.render("blockchain", {
    		blockNum, nonce, data, prevHash, currHash
    	});
		});
	});
});

app.get('/blockchain/search', function(req, res){
	var dynamicInput;
	var input = req.query.name;
	if(input == null){
		dynamicInput = '%'.concat('%');
	}
	else{
	 	dynamicInput = '%'.concat(input.concat('%'));
	}
	con.connect(function(err){

	con.query("SELECT * FROM blockchain WHERE number LIKE ? or nonce LIKE ? or data LIKE ? or prev_hash LIKE ? or curr_hash LIKE ?", [dynamicInput, dynamicInput, dynamicInput, dynamicInput, dynamicInput], function(err, result, fields){
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
		res.render("search_or_reset", {
    		blockNum, nonce, data, prevHash, currHash
    		}); 
		});
	});

});

app.get('/reset', function (req, res) {
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
    	res.render("search_or_reset", {
    		blockNum, nonce, data, prevHash, currHash
    	});
		});
	});
});


app.listen(8080);

