const express = require('express')
const { createTask,getTasks,getTask, deleteTask, updateTask} = require('../controllers/taskController')

const Task = require('../model/taskModel')

const router = express.Router()

// create a Task
router.post("/",createTask)
// get/Read all Tasks
  router.get("/", getTasks)
  // read single task
  router.get("/:id", getTask)
  // delete task
  router.delete("/:id", deleteTask)
  // update task
  router.put(":id", updateTask)
module.exports = router