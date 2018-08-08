'use strict';

module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  });
  Todo.associate = function (models) {
    // associations can be defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    });
  };
  return Todo;
};