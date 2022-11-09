const express = require("express");

const taskController = require("../controllers/task");

const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/", taskController.createTask);

router.get("/:taskId", taskController.getTask);

router.put("/:taskId", taskController.updateTask);

router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
