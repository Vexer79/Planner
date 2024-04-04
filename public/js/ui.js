(function (global) {
    const UI = {};
    UI.createTask = {};
    UI.settings = {};
    UI.viewTasks = {};
    let activeWindow = false;

    const wrapper = document.querySelector(".wrapper");
    const createTaskWindowTemplate = document.getElementById("create-task-window-template");
    const settingsWindowTemplate = document.getElementById("settings-window-template");

    const dayTasks = document.getElementById("day-tasks");
    const weekTasks = document.getElementById("week-tasks");
    const monthTasks = document.getElementById("month-tasks");
    const yearTasks = document.getElementById("year-tasks");

    dayTasks.addEventListener("click", viewTask(requests.getDayTasks));
    weekTasks.addEventListener("click", viewTask(requests.getWeekTasks));
    monthTasks.addEventListener("click", viewTask(requests.getMonthTasks));
    yearTasks.addEventListener("click", viewTask(requests.getYearTasks));

    function setActiveLink(link) {
        document.querySelector(".active").classList.remove("active");
        link.classList.add("active");
    }

    function viewTask(callback) {
        return function (event) {
            if (document.querySelector(".active") !== this) {
                setActiveLink(this);
                Task.clearAll();
                callback();
            }
        };
    }

    UI.createTask.open = function () {
        if (!activeWindow) {
            activeWindow = true;
            wrapper.appendChild(createTaskWindowTemplate.content.cloneNode(true));

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

    global.UI = UI;
})(window);
