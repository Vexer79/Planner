(function () {
    const addTaskMenuButton = document.getElementById("open-create-task-window-button");
    const burgerMenuButton = document.getElementById("open-settings-window-button");
    addTaskMenuButton.addEventListener("click", UI.createTask.open);
    addTaskMenuButton.addEventListener("dblclick", UI.menu.openOnClick);
    addTaskMenuButton.addEventListener("touchend", UI.menu.openOnTouch());
    burgerMenuButton.addEventListener("click", UI.settings.open);

})();