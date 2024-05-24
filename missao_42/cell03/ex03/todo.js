document.addEventListener("DOMContentLoaded", function() {
    loadTasksFromLocalStorage();
    });
    document.getElementById("addTaskButton").addEventListener("click", function() {
    var task = prompt("Digite uma nova tarefa:");
    if (task !== null && task.trim() !== "") {
    addTask(task);
    saveTasksToLocalStorage();
    }
    });

    document.getElementById("ft_list").addEventListener("click", function(event) {
        if (event.target.classList.contains("task")) {
            var confirmDelete = confirm("Tem certeza que deseja remover esta tarefa?");
            if (confirmDelete) {
            event.target.remove();
            saveTasksToLocalStorage();
            }
        }   
    });

function addTask(taskText) {
    var taskDiv = document.createElement("div");
    taskDiv.textContent = taskText;
    taskDiv.classList.add("task");
    document.getElementById("ft_list").prepend(taskDiv);
}

function saveTasksToLocalStorage() {
    var tasks = document.querySelectorAll(".task");
    var tasksArray = Array.from(tasks).map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function loadTasksFromLocalStorage() {
    var tasksLocalStorage = localStorage.getItem("tasks");
    if (tasksLocalStorage) {
    var tasksArray = JSON.parse(tasksLocalStorage);
    tasksArray.forEach(taskText => addTask(taskText));
    }
}