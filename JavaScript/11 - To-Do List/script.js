const todoList = [];

function addToArray() { 
  const inputElement = document.querySelector('.js-todo-input');
  const dateElement = document.querySelector('.js-date');

  const name = inputElement.value;
  const dueDate = dateElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateElement.value = '';

  displayTodoList();
}

function displayTodoList() {
  let todoListHTML = ``;
  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
      <div class = "todo-item">${name}</div> 
      <div class = "todo-date">${dueDate}</div>
      <button class = "todo-delete-button" onclick = "deleteFromList(${i})">Delete</button>
    `;
    
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteFromList(index) {
  todoList.splice(index, 1);
  displayTodoList();
}