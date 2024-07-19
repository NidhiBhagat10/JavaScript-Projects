const todoList = [];

function addTask() {
    const inputElement = document.querySelector('#js-task-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value='';

    renderTodoList(name);
}

for(let i=0; i< todoList.length; i++){
    renderTodoList(todoList[i]);
}

// Render Todo List

function renderTodoList(_task){
    const taskElement = document.querySelector('.todo-task');

    taskElement.innerHTML=`
        <div class="task">
            <input type="radio" name="todo-task" id="do-task">
            <label for="do-task">${todoList[i]}</label>
            <span class="date">due date</span>
            <button onclick="deleteTask()">Delete</button>
        </div>
    `;
    console.log(taskElement);
}




