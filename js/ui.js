(function (global) {
    const UI = {};
    const wrapper = document.querySelector(".wrapper");
    const links = document.querySelectorAll("ul li>a");
    const createTaskWindowTemplate = document.getElementById("create-task-window-template");

    for (const link of links) {
        link.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active");
            Task.clearAll();
            UI.viewTasks.viewByLink(link);
        });
    }

    UI.createTask = {};

    UI.createTask.open = function () {
        wrapper.appendChild(createTaskWindowTemplate.content.cloneNode(true));

        const createTaskButton = document.getElementById("create-task-button");
        const closeButton = document.getElementById("close-window-button");
        const taskInput = document.getElementById("input-task-content");

        taskInput.addEventListener("keyup", function (event) {
            event.key === "Enter" && Task.createUsingInterface();
        });
        createTaskButton.addEventListener("click", Task.createUsingInterface);
        closeButton.addEventListener("click", UI.createTask.close);
    };

    UI.createTask.close = function () {
        wrapper.removeChild(document.querySelector(".create-task-window"));
    };

    UI.viewTasks = {};

    UI.viewTasks.viewCurrent = function () {
        UI.viewTasks.viewByLink(document.querySelector(".active"));
    };

    UI.viewTasks.viewByLink = function (link) {
        const { [link.textContent]: currentTasks } = Task.getObjectReference;
        Object.entries(currentTasks).forEach(([key, value]) => {
            Object.values(value).forEach((taskContent) => {
                Task.create[key](taskContent);
            });
        });
    };

    global.UI = UI;
})(window);