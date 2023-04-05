const Task = require("../models/Task");

module.exports = class TaskController {
  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async detailedTask(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ raw: true, where: { id: id } });

    res.render("tasks/details", { task });
  }

  static async createTaskSave(req, res) {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/tasks");
  }

  static async editTask(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ where: { id: id }, raw: true });
    res.render("tasks/edit", { task });
  }

  static async editTaskSave(req, res) {
    const id = req.body.id;
    const task = {
      title: req.body.title,
      description: req.body.description,
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }

  static async deleteTask(req, res) {
    await Task.destroy({ where: { id: req.body.id } });
    res.redirect("/tasks");
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;
    const task = {
      completed: req.body.completed === "0" ? true : false,
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }
};
