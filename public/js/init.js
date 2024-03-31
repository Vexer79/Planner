(function () {
    const addTaskMenuButton = document.getElementById("open-create-task-window-button");
    addTaskMenuButton.addEventListener("click", UI.createTask.open);
    UI.viewTasks.viewCurrent();
})();