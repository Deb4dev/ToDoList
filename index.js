const input = document.getElementById('input')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const taskSaved = document.getElementById('taskSavedList')
function add(){
    const task = input.value.trim()
    if(task){
        createTaskelem(task)
        input.value = ""
        saveTask()
    }else{
        alert("give a proper task")
    }
}
addBtn.addEventListener('click',add)

const createTaskelem = (task)=>{
    const list = document.createElement('li')
    list.textContent = task
    taskList.appendChild(list)
}

const saveTask = ()=>{
    let tasks = []
    taskList.querySelectorAll('li').forEach((item)=>{
        tasks.push(item.textContent.trim())
        
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
}

//get the data and print
const getTask =(e)=>{
    //createTaskelem(tasks)
    let taskStr = []
    let prevTaskStr = []
    if(localStorage.getItem('tasks')){
        const taskString = localStorage.getItem('tasks')
        const tasks = JSON.parse(taskString)
        console.log(tasks)
        tasks.forEach(task=>{
            taskStr.push(task.trim())
        })
        //(prevString!==taskStr)?createTaskelem(taskStr):console.log("done before")
        if (JSON.stringify(taskStr) !== JSON.stringify(prevTaskStr)) {
            createTaskelem(taskStr); // Create task elements
            prevTaskStr = taskStr.slice(); // Update previous task array
        } else {
            console.log("Tasks already created before");
        }
        
    }else{
        console.log("nothing is stored")
    }
}
taskSaved.addEventListener('click',getTask)
