 const Task=require('../modules/Task');
const asyncWrapper =require('./middlwear/async');
const{createCustomError}=require('../errors/CustomError')
  const getALLTasks=asyncWrapper(async(req,res)=>{
      const tasks=await Task.find({})
      res.status(200).json({tasks})
  })

   const  createTask=asyncWrapper(async(req,res)=>{
       const task =await task.create(req.body)
       res.status(201).json({task})
   })

   const getTask=asyncWrapper(async(req,res)=>{
       const{id:taskID}=req.params
       const task=await task.findone({_id:taskID})
       if (!task){
           return next(createCustomError(`no task with id:${taskID}`,404))
       }
       res.stats(200).json({task})
   })
 const deleteTask=asyncWrapper(async(req,res,next)=>{
     const{id:taskID}=req.params
     const task=await Task.findOneAndDelete({id:taskID})
     if (!task) {
         return next (createCustomError(`no task is id:${taskId}`,404))
     }
     res.status(200).json({task})

 })
 const updateTask=asyncWrapper(async(req,res,next)=>{
    const{id:taskID}=req.params
    const task=await Task.findOneAndUpdate({id:taskID},req.body,{
        new:true,
        runvalidaters:true,
    })
    if (!task) {
        return next (createCustomError(`no task is id:${taskId}`,404))
    }
    res.status(200).json({task})
})

module.exports={
    getALLTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}