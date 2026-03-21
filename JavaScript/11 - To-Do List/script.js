const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

displayTodoList();

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

  localStorage.setItem('todoList', JSON.stringify(todoList));

  displayTodoList();
}

function displayTodoList() {
  let todoListHTML = ``;

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;

    const html = `
      <div class = "todo-item">${name}</div> 
      <div class = "todo-date">${dueDate}</div>
      <button class = "todo-delete-button" onclick = "deleteFromList(${index})">Delete</button>
    `;
    
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteFromList(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayTodoList();
}