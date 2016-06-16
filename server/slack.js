let SlackAPI = Meteor.npmRequire( 'node-slack' ),
    Slack    = new SlackAPI( Meteor.settings.private.slack.hookUrl );
 
Meteor.methods({
    'soupReady': function(){
	Slack.send({
	  text: "Isn't life a series of 'soups' that change as they repeat themselves?",
	  username: "Soup Ready",
	  icon_url: "https://cdn3.iconfinder.com/data/icons/halloween-2/128/cauldron-icon.png"
	});
    }
});
