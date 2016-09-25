module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.1",
		"title": "API игры Монополия",
		"description": "**Монополия онлайн**"
	},
	"basePath": "/api",
	"schemes": ["http","ws"],
   	"host": "http://localhost:3000",

	paths: {
		'/messages': require('./resources/messages'),
		'/signup': require('./resources/signup'),
		'/signin': require('./resources/signin'),
		'/signout': require('./resources/signout'),
		'/game': require('./resources/game')
	},

	definitions: {
		Message: require('./scheme/Message'),
		Game: require('./scheme/Game'),
		WSMessage: require('./scheme/WSMessage'),
	}

}
