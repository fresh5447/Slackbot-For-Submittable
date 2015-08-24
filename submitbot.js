// var request = require('request');

// module.exports = function (req, res, next) {

//   var botPayload = {};

//     botPayload.username = 'submitbot';
//     botPayload.channel = req.body.channel_id;
//     botPayload.icon_emoji = ':game_die:';

//     // send dice roll
//     send(botPayload, function(error, status, body) {
//         if (error) {
//             return next(error);

//         } else if (status !== 200) {
//             // inform user that our Incoming WebHook failed
//             //I AM LINE 48 **********8
//             return next(new Error('Incoming WebHook: ' + status + ' ' + body));

//         } else {
//             return res.status(200).end();
//         }
//     });
// }

// function get() {
//     console.log("I made it to the get")
//     request({
//             url: 'https://api.submittable.com/v1/submissions',
//             method: 'GET', //Specify the method
//             headers: { //We can define headers too
//                 // 'Authorization': 'Basic ' + process.env.SUBMITTABLE_PATH
//                 'Authorization': 'Basic ' + "ZG91Z0Brb3Ntb2pvLmNvbTplMmZhMDA5MWYyMjM0Yzg4ODAwZWVlNWQ1ZTUxMTM0Mw=="
//             }
//         }, function(error, response, body) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 var data = JSON.parse(response.body);
//                 var items = data.items;
//                 // EXTRACT PEOPLE FROM DATA OBJECT AND SAVE AS PERSON
//                 for (var i = 0; i < items.length; i++) {
//                     var person = new Object();
//                     person.first_name = items[i].submitter.first_name;
//                     person.last_name = items[i].submitter.last_name;
//                     person.full_name = items[i].submitter.first_name + " " + items[i].submitter.last_name;
//                     person.email = items[i].submitter.email;
//                     person.status = items[i].status;
//                     people.push(person);
//                 };
//                 people.push(person);
//                 for (var i = 0; i < people.length; i++) {
//                     botPayload.text += (people[i].full_name).toString() + " Status: " + (people[i].status).toString() + "\n";
//                 };

//             };
//     }


//     function send(botPayload, callback) {
//         // var uri = process.env.SUBMIT_POST_PATH;
//         var uri = "https://hooks.slack.com/services/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";

//         request({
//             uri: uri,
//             method: 'POST',
//             body: JSON.stringify(botPayload)
//         }, function(error, response, body) {
//             if (error) {
//                 return callback(error);
//             }

//             callback(null, response.statusCode, body);
//         });
//     }
