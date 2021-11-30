const express= require('express');
const router =express.Router()
const {getAllTasks,CreateTasks,getTasks,UpdateTasks,deleteTasks} =require('../controller/taskss')
//import the rooute from taskss
router.route('/').get(getAllTasks).post(CreateTasks)
router.route('/:id').get(getTasks).patch(UpdateTasks).delete(deleteTasks)
module.exports= router
