module.exports = function(req, res, next){
	var userName = req.body.user_name;
	var botPayload = {
		text: 'Hello, ' + userName + '!'
	};

	if (userName !== 'slackbot') {
		//all hooks post as slackbot, even if the name appears differently in chat.
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
}