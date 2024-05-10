const input = document.getElementById('input')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

loadTask()
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

function createTaskelem (task){
    const list = document.createElement('li')
    list.textContent = task
    taskList.appendChild(list)
}

function saveTask (){
    let tasks = []
    taskList.querySelectorAll('li').forEach((item)=>{
        tasks.push(item.textContent.trim())
        
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))||[]
    tasks.forEach(createTaskelem)
}

