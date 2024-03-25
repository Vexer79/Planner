(function () {
    const addTaskMenuButton = document.getElementById("open-create-task-window-button");
    addTaskMenuButton.addEventListener("click", Windows.createTask.open);
    Task.viewCurrentTasks();
})();