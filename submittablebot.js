var express = require('express');
var request = require('request');
var router = express.Router();
var http = require('http');

var payload = {};

payload.channel = "#slack-development";
payload.username = "Submittable Bot";
payload.icon_emoji = ":ghost:";


var people = [];


//  GET ALL SUBMISSIONS FROM SUBMITTABLE
request({
    url: 'https://api.submittable.com/v1/submissions',
    method: 'GET', //Specify the method
    headers: { //We can define headers too
        'Authorization': 'Basic ' + process.env.SUBMITTABLE_PATH
    }
}, function(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        var data = JSON.parse(response.body);
        var items = data.items;
        // EXTRACT PEOPLE FROM DATA OBJECT AND SAVE AS PERSON
        for (var i = 0; i < items.length; i++) {
            var person = new Object();
            person.first_name = items[i].submitter.first_name;
            person.last_name = items[i].submitter.last_name;
            person.full_name = items[i].submitter.first_name + " " + items[i].submitter.last_name;
            person.email = items[i].submitter.email;
            person.status = items[i].status;
            people.push(person);
        };
        people.push(person);
        for (var i = 0; i < people.length; i++) {
            payload.text += "Name: " + (people[i].full_name).toString() + " Status: " + (people[i].status).toString() + "\n";
        };
    };
    request({
        url: process.env.SUBMIT_POST_PATH, //URL to hit
        method: 'POST', //Specify the method
        body: JSON.stringify(payload)
    }, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log("SUCCESSSS")
        }
    });

});


module.exports = function(req, res, next) {

    if (people) {
        //all hooks post as slackbot, even if the name appears differently in chat.
        return res.status(200).json(people);
    } else {
        return res.status(200).end();
    }
}
