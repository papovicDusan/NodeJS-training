const Task = require("../models/task");

exports.getTasks = (req, res, next) => {
  Task.find()
    .then((tasks) => {
      res
        .status(200)
        .json({ message: "Fetched tasks successfully.", tasks: tasks });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTask = (req, res, next) => {
  const title = req.body.title;
  const is_done = req.body.is_done;

  const task = new Task({
    title: title,
    is_done: is_done,
  });
  task
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Task created successfully!",
        task: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTask = (req, res, next) => {
  const taskId = req.params.taskId;
  Task.findById(taskId)
    .then((task) => {
      res.status(200).json({ message: "Task fetched.", task: task });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateTask = (req, res, next) => {
  const taskId = req.params.taskId;

  const title = req.body.title;
  const is_done = req.body.is_done;

  Task.findById(taskId)
    .then((task) => {
      task.title = title;
      task.is_done = is_done;
      return task.save();
    })
    .then((task) => {
      res.status(200).json({ message: "Task updated!", task: task });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.taskId;
  Task.findById(taskId)
    .then((user) => {
      return Task.findByIdAndRemove(taskId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Deleted task." });
    })
    .catch((err) => {
      console.log(err);
    });
};
