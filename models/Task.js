const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.TEXT,
    required: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    required: true,
  },
});

module.exports = Task;
