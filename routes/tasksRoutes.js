const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get("/add", TaskController.createTask);
router.get("/details/:id", TaskController.detailedTask);
router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.deleteTask);
router.get("/edit/:id", TaskController.editTask);
router.post("/edit/", TaskController.editTaskSave);
router.post("/updatestatus", TaskController.toggleTaskStatus);
router.get("/", TaskController.showTasks);

module.exports = router;
