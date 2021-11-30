const e = require("express")

const taskIDDOM=document.querySelector('.task-edit-id')
const  taskNameDOM=document.querySelector('.task-edit-name')
const taskCompletedDom=document.querySelector('.task-edit-complete')
const editFormDOM=document.querySelector('.single-task-form')
const editbtnDOM=document.querySelector('.task-edit-btn')
const formALertDOM=document.querySelector('.form-alert')
const params= window.location.search
const id= newURLSearchParams(params).get(id)
 let tempName
 const showTask=async()=>{
     try {
         const{data:{task},}
         =await axios.get('./api/v1/tasks/${id}')
         const {_id:taskID,completed,name}=task
         taskIDDOM.textContent=taskID
         taskIDDOM.value=name
         tempName=name
         if(completed){
             taskCompletedDom.checked=true
         }
         
     } catch (error) {
         console.log(error)
         
     }}
     showTask()
     editFormDOM.addEventListener('submit',async(e)=>{
         editFormDOM.textContent='loading..'
         e.prevent.default()
         try {

        const taskName=taskDOM.value
        const taskCompleted=taskCompletedDom.checked
             const{data:{task},}=await axiox.patch(`./api/v1/tasks/${id}`,{
                 name:taskName,
                 completed:taskCompleted,
             })
             const {_id:taskID,completed,name}=task
             taskIDDOM.textcontent=taskID
             taskIDDOM.value=name
             tempName=name
             if(completed){
                 taskCompletedDom.checked=true
             }
             formALertDOM.style.display='block'
             formALertDOM.textContent='sucess,edited task'
             formALertDOM.classList.add('text-sucess')

         } catch (error) {
             
                 console.error(error)
                 taskNameDOM.value=tempName
                 formALertDOM.style.display='block'
                 formALertDOM.innerHTML='error,please try again'
             
         }

         editbtnDOM.textContent='edit'
         setTimeout(() => {
             formALertDOM.style.display='none'
             formALertDOM.classList.remove('text-sucess')
             
         }, 3000);

         
     })

