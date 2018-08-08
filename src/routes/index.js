const todosController = require('../controller').todos;

module.exports = (app) => {
	app.get('/api', (req,res) => res.status(200).send({
		messages: "Welcome to todo API",
	}));

	app.post('/api/todos', todosController.create);
	app.get('/api/todos', todosController.list);
	app.get('/api/todos/:todoId', todosController.retrieve);
	app.put('/api/todos/:todoId', todosController.update);
	app.delete('/api/todos/:todoId', todosController.delete);
};