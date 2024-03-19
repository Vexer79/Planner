(function () {
    const addTaskMenuButton = document.getElementById("open-create-task-window-button");
    addTaskMenuButton.addEventListener("click", createTaskWindow.open);
    Task.viewDailyTasks();
})();