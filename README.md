#### A Slackbot built for the Montana Code School by Doug Walter (deprecated)

When a new student application is submitted on Submittable's platform, a notification including the students information is posted to the team Slack channel.

*Currently we setup an endpoint `/submittables` which will hit Submittables API and
return all Submissions.*

##Production Endpoint: https://slacky-mcslackington.herokuapp.com/

The core bot code resides in `submittablebot.js`

**ToDo's:**

*Set up an endpoint that returns only open/inprogress submissions.*

*Create an incoming webhook that posts to Slack whenever there is
an update on a Submission (notes, status, etc.)*


There is also a working dicebot that rolls a random set of dice.
Credit: [SitePoint](http://www.sitepoint.com/getting-started-slack-bots/)