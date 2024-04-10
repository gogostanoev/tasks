const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoListContainer = document.getElementsByClassName("todo-list-container")[0];
const todoStatus = document.getElementById("todo-status");
const clearBtn = document.getElementById("clear-btn");


let todos = [];

const printTodos = (todoList, elementsContainer) => {
    elementsContainer.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        elementsContainer.innerHTML += `
            <div class="todo-wrapper">
                <li class="todo-item">${todoList[i]}</li>
                <button class="remove-btn" onclick="removeTodo(this, todos)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>
            </div>
        `;
    }

    clearButtonVisibility();
}


addBtn.addEventListener("click", () => {
    if(!todoInput.value) return;
    const value = todoInput.value;
    
    todos.push(value);
    printTodos(todos, todoListContainer);
    updateTodoStatus();
    saveTodosToLocalStorage();
    todoInput.value = "";
});

todoInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addBtn.click()
    }
});

const removeTodo = (button, todoList) => {
    // textContent is just the content inside the element(li)
    const todoName = button.parentElement.querySelector('.todo-item').textContent;
    const remainingTodos = todoList.filter(todo => todo !== todoName);
    todos = remainingTodos;

    printTodos(todos, todoListContainer);
    updateTodoStatus();
    saveTodosToLocalStorage();
}

clearBtn.addEventListener("click", () => {
    todos.length = 0;
    printTodos(todos, todoListContainer);
    updateTodoStatus();
    saveTodosToLocalStorage();
});

const updateTodoStatus = () => {
    todoStatus.innerHTML = todos.length > 0 ? `You have ${todos.length} pending tasks` : "";
};

const clearButtonVisibility = () => {
    clearBtn.style.display = todos.length > 0 ? 'block' : 'none';
};

const saveTodosToLocalStorage = () => {
    // localStorage can only store data in string
    localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    // to work with the todos array we parse it(we convert it back to a JS object to manipulate it)
    todos = storedTodos ? JSON.parse(storedTodos) : [];
};

window.addEventListener('load', () => {
    loadTodosFromLocalStorage();
    printTodos(todos, todoListContainer);
    updateTodoStatus();
});