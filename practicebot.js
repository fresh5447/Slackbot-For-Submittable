var request = require('request');

module.exports = function(req, res, next){

	var userName = req.body.user_name;
	var paylaod = {
		text: 'Hello, ' + userName + '!'
	};

	if (userName !== 'slackbot') {
		//all hooks post as slackbot, even if the name appears differently in chat.
		return res.status(200).json(paylaod);
	} else {
		return res.status(200).end();
	}

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