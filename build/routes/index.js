'use strict';

var todosController = require('../controller').todos;

module.exports = function (app) {
	app.get('/api', function (req, res) {
		return res.status(200).send({
			messages: "Welcome to todo API"
		});
	});

	app.post('/api/todos', todosController.create);
	app.get('/api/todos', todosController.list);
	app.get('/api/todos/:todoId', todosController.retrieve);
	app.put('/api/todos/:todoId', todosController.update);
	app.delete('/api/todos/:todoId', todosController.delete);
};