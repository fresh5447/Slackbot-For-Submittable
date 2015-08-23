var request = require('request');

module.exports = function (req, res, next) {

	botPayload = {}
  // write response message and add to payload
  botPayload.text = "I hope this response comes through";
	botPayload.username = 'practice';
  botPayload.channel = req.body.channel_id;
  botPayload.icon_emoji = ':game_die:';

	  if (req.body.text === "hello") {
    // parse roll type if specified
    botPayload.text = "you typed hello";
    } else if (req.body.text === "test") {
    botPayload.text = "you typed test"

    } else {
      // send error message back to user if input is bad
      return res.status(200).send('<number>d<sides>');
    }
  }


  // send dice roll
  send(botPayload, function (error, status, body) {
  	console.log(botPayload);
    if (error) {
      return next(error);

    } else if (status !== 200) {
      // inform user that our Incoming WebHook failed
      //I AM LINE 48 **********8
      return next(new Error('Incoming WebHook: ' + status + ' ' + body));

    } else {
      return res.status(200).end();
    }
  });
}

function send (payload, callback) {

  var uri = "https://hooks.slack.com/services/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";

  request({
    uri: uri,
    method: 'POST',
    body: JSON.stringify(payload)
  }, function (error, response, body) {
    if (error) {
      return callback(error);
    }

    callback(null, response.statusCode, body);
  });
}