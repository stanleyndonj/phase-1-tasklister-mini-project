document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description").value;

    if (newTaskDescription.trim() !== "") {
      addTask(newTaskDescription);
      form.reset();
    }
  });

  function addTask(task) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
  
});
