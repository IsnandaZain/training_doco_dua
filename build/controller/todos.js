'use strict';

var Todo = require('../models').Todo;

module.exports = {
	create: function create(req, res) {
		return Todo.create({ title: req.body.title }).then(function (todo) {
			return res.status(201).send(todo);
		}).catch(function (err) {
			return res.status(400).send(err);
		});
	},
	list: function list(req, res) {
		return Todo.findAll({
			include: [{
				model: TodoItem,
				as: 'todoItems'
			}]
		}).then(function (todos) {
			return res.status(200).send(todos);
		}).catch(function (err) {
			return res.status(400).send(er);
		});
		/*
  return Todo.all().then(todos => res.status(200).send(todos))
  .catch(err => res.status(400).send(err));
  */
	},
	retrieve: function retrieve(req, res) {
		return Todo.findById(req.params.todoId).then(function (todo) {
			if (!todo) {
				return res.status(404).send({
					messages: "Todo not found"
				});
			}
			return res.status(200).send(todo);
		}).catch(function (err) {
			return res.status(400).send(err);
		});
	},
	update: function update(req, res) {
		return Todo.findById(req.params.todoId).then(function (todo) {
			if (!todo) {
				return res.status(404).send({
					messages: "Todo not found"
				});
			}
			return todo.update({
				title: req.body.title || todo.title
			}).then(function () {
				return res.status(200).send(todo);
			}).catch(function (err) {
				return res.status(400).send(err);
			});
		}).catch(function (err) {
			return res.status(400).send(err);
		});
	},
	delete: function _delete(req, res) {
		return Todo.findById(req.params.todoId).then(function (todo) {
			if (!todo) {
				return res.status(404).send({
					messages: "Todo not found"
				});
			}
			return todo.destroy().then(function () {
				return res.status(200).send({ messages: "Data berhasil dihapus" });
			}).catch(function (err) {
				return res.status(400).send(err);
			});
		}).catch(function (err) {
			return res.status(400).send(err);
		});
	}
};