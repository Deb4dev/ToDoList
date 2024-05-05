const input = document.getElementById('input')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
function add(){
    const task = input.value.trim()
    if(task){
        createTaskelem(task)
        input.value = ""
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