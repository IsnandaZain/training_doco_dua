'use strict';

var TodoItem = require('../models').TodoItem;

module.exports = {
	create: function create(req, res) {
		return TodoItem.create({
			content: req.body.content,
			todoId: req.params.todoId
		}).then(function (todoItem) {
			return res.status(201).send(todoItem);
		}).catch(function (err) {
			return res.status(400).send(err);
		});
	}
};