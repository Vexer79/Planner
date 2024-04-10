(function (global) {
    const UI = {};
    UI.createTask = {};
    UI.settings = {};
    UI.menu = {};
    let activeWindow = false;

    const wrapper = document.querySelector(".wrapper");
    const createTaskWindowTemplate = document.getElementById("create-task-window-template");
    const settingsWindowTemplate = document.getElementById("settings-window-template");

    const dayTasks = document.getElementById("day-tasks");
    const weekTasks = document.getElementById("week-tasks");
    const monthTasks = document.getElementById("month-tasks");
    const yearTasks = document.getElementById("year-tasks");

    dayTasks.addEventListener("click", setActiveLink);
    weekTasks.addEventListener("click", setActiveLink);
    monthTasks.addEventListener("click", setActiveLink);
    yearTasks.addEventListener("click", setActiveLink);

    function setActiveLink() {
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    }

    UI.createTask.open = function () {
        if (!activeWindow) {
            activeWindow = true;
            wrapper.appendChild(createTaskWindowTemplate.content.cloneNode(true));

            const createTaskButton = document.getElementById("create-task-button");
            const closeButton = document.getElementById("close-window-button");
            const taskInput = document.getElementById("input-task-content");
            const taskColourInput = document.getElementById("task-colour");

            taskInput.addEventListener("keyup", function (event) {
                if (event.key === "Enter" && taskInput.value) {
                    Task.create({
                        content: taskInput.value,
                        colour: taskColourInput.value,
                        startTime: "now",
                        completeTime: "tomorrow",
                        notifications: true,
                        container: "not-started-tasks-container",
                        index: document.getElementById("not-started-tasks-container").children
                            .length,
                        type: document.querySelector(".active").id.replace("-tasks", ""),
                    });
                }
            });
            createTaskButton.addEventListener("click", (event) => {
                if (taskInput.value) {
                    Task.create({
                        content: taskInput.value,
                        colour: taskColourInput.value,
                        startTime: "now",
                        completeTime: "tomorrow",
                        notifications: true,
                        container: "not-started-tasks-container",
                        index: document.getElementById("not-started-tasks-container").children
                            .length,
                        type: document.querySelector(".active").id.replace("-tasks", ""),
                    });
                }
            });
            closeButton.addEventListener("click", UI.createTask.close);
        }
    };

    UI.createTask.close = function () {
        activeWindow = false;
        wrapper.removeChild(document.querySelector(".create-task-window"));
    };

    UI.settings.open = function () {
        if (!activeWindow) {
            activeWindow = true;
            wrapper.appendChild(settingsWindowTemplate.content.cloneNode(true));
            const closeButton = document.getElementById("close-window-button");
            closeButton.addEventListener("click", UI.settings.close);
        }
    };

    UI.settings.close = function () {
        activeWindow = false;
        wrapper.removeChild(document.querySelector(".settings-window"));
    };

    UI.menu.openOnClick = function () {
        document.getElementById("open-settings-window-button").classList.toggle("activeMenu");
    };
    UI.menu.openOnTouch = function () {
        let lastTap = 0;
        let timeout;
        return function (event) {
            const curTime = new Date().getTime();
            const tapLen = curTime - lastTap;
            if (tapLen < 500 && tapLen > 0) {
                UI.menu.openOnClick();
            } else {
                timeout = setTimeout(() => {
                    clearTimeout(timeout);
                }, 500);
            }
            lastTap = curTime;
        };
    };
    global.UI = UI;
})(window);
