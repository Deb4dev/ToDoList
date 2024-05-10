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

    const deleteButton = document.createElement("button")
    deleteButton.textContent = 'delete'
    deleteButton.className = 'delete'
    list.appendChild(deleteButton)
    taskList.appendChild(list)
    deleteButton.addEventListener('click',()=>{
        taskList.removeChild(list)
        saveTask()
    })
}

function saveTask (){
    let tasks = []
    taskList.querySelectorAll('li').forEach((item)=>{
        tasks.push(item.textContent.replace('delete','').trim())
        
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))||[]
    tasks.forEach(createTaskelem)
}

