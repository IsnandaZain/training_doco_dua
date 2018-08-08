'use strict';

var todoItemsController = require('../controller').todoItems;

module.exports = function (app) {
	app.post('/api/todos/:todoId/items', todoItemsController.create);
	app.get('/api/todos', todosController.list);
	app.get('/api/todos/:todoId', todosController.retrieve);
	app.put('/api/todos/:todoId', todosController.update);
	app.delete('/api/todos/:todoId', todosController.delete);
};