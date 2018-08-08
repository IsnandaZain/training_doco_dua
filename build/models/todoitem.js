'use strict';

module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  TodoItem.associate = function (models) {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    });
  };
  return TodoItem;
};