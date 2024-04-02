(function (global) {
    const UI = {};
    const wrapper = document.querySelector(".wrapper");
    const links = document.querySelectorAll("ul li>a");
    const createTaskWindowTemplate = document.getElementById("create-task-window-template");
    const settingsWindowTemplate = document.getElementById("settings-window-template");
    let activeWindow = false;

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
        if (!activeWindow) {
            wrapper.appendChild(createTaskWindowTemplate.content.cloneNode(true));
            activeWindow = true;

            const createTaskButton = document.getElementById("create-task-button");
            const closeButton = document.getElementById("close-window-button");
            const taskInput = document.getElementById("input-task-content");

            taskInput.addEventListener("keyup", function (event) {
                event.key === "Enter" && Task.createUsingInterface();
            });
            createTaskButton.addEventListener("click", Task.createUsingInterface);
            closeButton.addEventListener("click", UI.createTask.close);
        }
    };

    UI.createTask.close = function () {
        wrapper.removeChild(document.querySelector(".create-task-window"));
        activeWindow = false;
    };

    UI.settings = {};

    UI.settings.open = function () {
        if (!activeWindow) {
            wrapper.appendChild(settingsWindowTemplate.content.cloneNode(true));
            activeWindow = true;
            const closeButton = document.getElementById("close-window-button");
            closeButton.addEventListener("click", UI.settings.close);
        }
    };

    UI.settings.close = function () {
        wrapper.removeChild(document.querySelector(".settings-window"));
        activeWindow = false;
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
