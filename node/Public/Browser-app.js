const tasksDom=document.querySelector('.task')
const loadingDOm=document.querySelector('.loading-text')
const formDom=document.querySelector('.task-form')
const taskInputDom=document.querySelector('.task-input')
const formAlertDom=document.querySelector('.from-alert')
//load tasks from the tasks api
const showTask=async ()=>{
    loadingDOm.style.visibility='visible'
    try {
        const{
            data:{tasks},
        }=await axios.get('/api/v1/tasks')
         if(tasks.length<1){
             tasksDom.innerHTML='<h5 class="empty-lis"t>no task in your list </h5>'
             loadingDOm.style.visibility="hidden"   
             return
         }
         const allTasks=tasks
         .map((task)=>{
             const {completed,_id:taskID,name}=task
            return `<div class="single-task ${completed && 'task-completed'}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">
            <!----editlink>
            <a href="task.html?id=${taskID}" class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            <!---delete-btn--->
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fa fa-trash"></i>
            </button>
            </div>
            </div>`
         })
         .join('')
         
     
    } catch (error) {
        taskDom.innerhtml='<h5 class="empty-list">there was an error,... please try later</h5>'
         }
         loadingDOm.style.visibility='hidden'
        }
        showTasks()
// delete task/api/tasks /id

taskDOM.addEventListener('click',async(e)=>{
    const el=e.target
    if (el.paramElement.classList.contains('delete-btn')){
        loadingDOm.style.visibility='visible'
        const id =el.paramElement.dataSet.id
        try {
            await axios .delete(`api/v1/tasks/${id}`)
            showTask()
        } catch (error) {
            console.log(error)
            
        }
    }
    loadingDOm.style.visibility='hidden'

})
//form
 formDom .addEventListener('submit',async(e)=>{
     e.preventDefault()
     const name=taskInputDom.value
     try{
         taskInputDom.value=''//html dom value set the dom value
         formAlertDom .style.display='block'
         formAlertDom.textContent='success,task addded'
         formAlertDom.classList.add('text-sucess')//dom elemennt
        } catch(error){
            formAlertDom.style.display='block'
            formAlertDom.innerHTML='error.please  try again'
        }
        setTimeout(() => {
            formAlertDom.style.display='block'
            formAlertDom.classList.remove('text-success')//classlist ithe dom property
            
        },3000);
 })