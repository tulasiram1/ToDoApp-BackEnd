const express = require('express');
const Router = express.Router();

const taskController = require('./../controller/taskController');


Router.route('/').put(taskController.createTask).get(taskController.getAllTasks).delete(taskController.deleteAllTasks);

module.exports = Router;