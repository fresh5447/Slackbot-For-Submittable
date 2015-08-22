var express = require('express');
var request = require('request');
var router = express.Router();
var uri = "https://api.submittable.com/v1/submissions";
var http = require('http');

	var people = [];

	request({
	    url: 'https://api.submittable.com/v1/submissions', //URL to hit
	    method: 'GET', //Specify the method
	    headers: { //We can define headers too
	        'Authorization': 'Basic ' + SUBMITTABLE_PATH;
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	    	var data = JSON.parse(response.body);
	    	var items = data.items;
		    for (var i = 0; i < items.length; i++) {
		    	people.push(items[i].submitter);
		    	people.push(items[i].status);
		    };
	        console.log(people);
	        return people;
	    }
	});


module.exports = function(req, res, next){

	if (people) {
		//all hooks post as slackbot, even if the name appears differently in chat.
		return res.status(200).json(people);
	} else {
		return res.status(200).end();
	}

}

