const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const task = taskInput.value;
    if(task) {
        createTaskElem(task);
        taskInput.value = "";
    } else {
        alert("Please enter a task");
    }
}

taskInput.addEventListener("keypress", key);
function key(){
    if(event.keyCode == 13){
        addTask()
    }
}

addButton.addEventListener("click", addTask);

function createTaskElem(task) {
    const li = document.createElement("li");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";


    const span = document.createElement("span");
    span.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "editTask";


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editButton);


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteTask";
    li.appendChild(deleteButton);


    taskList.appendChild(li);


    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    });
    editButton.addEventListener("click", function () {
        const newTask = prompt("Edit your task","");
        if(newTask === ""){
            alert("Please enter a task");
            return span
        }
        span.textContent = newTask;
    })

}
