const Todo = require('../models').Todo;

module.exports = {
	create(req,res){
		return Todo.create({title: req.body.title})
		.then(todo => res.status(201).send(todo))
		.catch(err => res.status(400).send(err));
	},

	list(req,res){
		return Todo.findAll({
			include: [{
				model: TodoItem,
				as: 'todoItems',
			}],
		})
		.then(todos => res.status(200).send(todos))
		.catch(err => res.status(400).send(err));
		/*
		return Todo.all().then(todos => res.status(200).send(todos))
		.catch(err => res.status(400).send(err));
		*/
	},

	retrieve(req,res){
		return Todo.findById(req.params.todoId).then(todo => {
			if(!todo){
				return res.status(404).send({
					messages: "Todo not found",
				});
			}
			return res.status(200).send(todo)
		})
		.catch(err => res.status(400).send(err));
	},

	update(req,res){
		return Todo.findById(req.params.todoId).then(todo =>{
			if(!todo){
				return res.status(404).send({
					messages: "Todo not found",
				});
			}
			return todo.update({
				title: req.body.title || todo.title,
			})
			.then( () => res.status(200).send(todo))
			.catch( err => res.status(400).send(err));
		})
		.catch( err => res.status(400).send(err));
	},


	delete(req,res){
		return Todo.findById(req.params.todoId).then(todo => {
			if(!todo){
				return res.status(404).send({
					messages: "Todo not found",
				});
			}
			return todo.destroy().then( () => res.status(200).send({messages : "Data berhasil dihapus"}))
			.catch(err => res.status(400).send(err));
		})
		.catch( err => res.status(400).send(err));
	}
};