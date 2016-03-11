var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res) {
	var q = req.query.q;

	var md5Value = utility.md5(q);

	res.send('Your query\'s md5 value is: ' + md5Value);
});

app.listen(12345, function(req, res) {
	console.log('app is listening at port 12345');
});
