const btn = document.querySelector('.addTask');
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('.input')

btn.addEventListener('click', addTask);

function addTask(e){
  e.preventDefault();
  const newLi = document.createElement('li');
  const complete = document.createElement('p');
  const checkBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  complete.textContent = 'Completed'

  
  if(input.value !== ''){
    newLi.textContent = input.value;
    input.value = '';
    todoList.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  } else {
    alert('Please enter some text');
  }

  // mark list item as completed
  checkBtn.addEventListener('click', function(){
    newLi.style.textDecoration = 'line-through'
    newLi.appendChild(complete);
  })

  // dele the todo list item
  delBtn.addEventListener('click', function(){
    const del = confirm('Are you sure about to delete this todo list item?');
    if(del){
      const parent = this.parentNode;
      parent.remove();
    }
  })
}