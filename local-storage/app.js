window.onload = () => displayTask()

const btn = document.querySelector('.addTask');
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('.input');
const clear = document.querySelector('.clear');

btn.addEventListener('click', addTask);

function addTask(e){
  e.preventDefault();
  if(input.value){
    addTaskToLS();
    todoList.innerHTML = '<h2>List of Task To Do</h2>';
    displayTask();
  } else {
    alert('Please enter a task.')
  }
}

// save task to local storage

function addTaskToLS(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = ''
  // console.log(tasks)
}

// display tasks

function displayTask(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  };
  tasks.forEach(function(task, index){
    const newLi = document.createElement('li');
    const complete = document.createElement('p');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    
    delBtn.setAttribute('data-index', index)
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    complete.textContent = 'Completed';

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);

    todoList.appendChild(newLi)

    // mark task as a completed
    
    checkBtn.addEventListener('click', () => {
      newLi.appendChild(complete);
    })
  
    delBtn.addEventListener('click', (e)=>{
      deleteTask(e.currentTarget.dataset.index)
    })
  });
}

// delete task

function deleteTask(index){
  let tasks;
  const del = confirm('You are about to delete this task?');

  if(del){
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoList.innerHTML = '<h2>List of Task To Do</h2>';
  displayTask();
}

// clear tasks

clear.addEventListener('click', clearTask);

function clearTask(){
  const delTasks = confirm('Delete all tasks?');
  if(delTasks){
    localStorage.clear();
    todoList.innerHTML = '<h2>List of Task To Do</h2>';
    displayTask();
  }
}