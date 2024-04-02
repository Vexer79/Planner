(function () {
    const addTaskMenuButton = document.getElementById("open-create-task-window-button");
    const burgerMenuButton = document.getElementById("open-settings-window-button");
    addTaskMenuButton.addEventListener("click", UI.createTask.open);
    burgerMenuButton.addEventListener("click", UI.settings.open);
    UI.viewTasks.viewCurrent();
})();