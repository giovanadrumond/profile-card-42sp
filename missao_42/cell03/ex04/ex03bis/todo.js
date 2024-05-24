$(document).ready(function() {
    loadTasksFromLocalStorage();
  
    $("#addTaskButton").click(function() {
      var task = prompt("Digite uma nova tarefa:");
      if (task !== null && task.trim() !== "") {
        addTask(task);
        saveTasksToLocalStorage();
      }
    });
  
    $("#ft_list").on("click", ".task", function(event) {
      var confirmDelete = confirm("Tem certeza que deseja remover esta tarefa?");
      if (confirmDelete) {
        $(this).remove();
        saveTasksToLocalStorage();
      }
    });
  
    function addTask(taskText) {
      var taskDiv = $("<div>").text(taskText).addClass("task");
      $("#ft_list").prepend(taskDiv);
    }
  
    function saveTasksToLocalStorage() {
      var tasksArray = $(".task").map(function() {
        return $(this).text();
      }).get();
      localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }
  
    function loadTasksFromLocalStorage() {
      var tasksLocalStorage = localStorage.getItem("tasks");
      if (tasksLocalStorage) {
        var tasksArray = JSON.parse(tasksLocalStorage);
        tasksArray.forEach(function(taskText) {
          addTask(taskText);
        });
      }
    }
  });
  