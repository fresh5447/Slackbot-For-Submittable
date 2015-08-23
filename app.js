var express = require('express');
var bodyParser = require('body-parser');
var hellobot = require('./hellobot');
var dicebot = require('./dicebot');
var submittablebot = require('./submittablebot');
var practicebot = require('./practicebot');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){res.status(200).json("it's working")});
app.post('/submissions', submittablebot);
app.post('/hello', hellobot);
app.post('/roll', dicebot);
app.post('/practice', practicebot);

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(400).send(err.message)
});

app.listen(port, function(){
	console.log('Slack bot listening on port ' + port)
});