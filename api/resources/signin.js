exports.post = {
	"tags": ["signin"],
	"description": "Метод авторизирующий пользователя",
	"parameters": [
		{
			"name": "email",
			"description": "Электроная почта пользователя",
			"type": "string"
		},
		{
			"name": "password",
			"description": "Пароль пользователя",
			"type": "string"
		},

	],
	"responses": {
		"200": {
	
				"description": "Содержит ключ сессии пользователя",
				"type": "string"
		},
		"400": {
			"description": "Ошибка при выполнении запроса"
		}
	},
	"x-amples": [{
		"description": "создание тестового сообщения",
		"request": {
			"params": {
				"login": "test",
				"text": "Проверяем"
			}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			},
			"validator": function (res) {

				if (typeof res.id !== 'number' ) {
					return 'не корректный id';
				}

				if (typeof res.message !== 'string') {
					return 'не корректный текст сообщения';
				}

				if (typeof res.email !== 'string') {
					return 'не корректный login';
				}

				return true;
			}
		}
	}]
};
