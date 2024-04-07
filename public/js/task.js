(function (global) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");

    const dayTasks = document.getElementById("day-tasks");
    const weekTasks = document.getElementById("week-tasks");
    const monthTasks = document.getElementById("month-tasks");
    const yearTasks = document.getElementById("year-tasks");

    dayTasks.addEventListener("click", viewTasksIfActiveLink(requests.getDayTasks));
    weekTasks.addEventListener("click", viewTasksIfActiveLink(requests.getWeekTasks));
    monthTasks.addEventListener("click", viewTasksIfActiveLink(requests.getMonthTasks));
    yearTasks.addEventListener("click", viewTasksIfActiveLink(requests.getYearTasks));

    function viewTasksIfActiveLink(getTasks) {
        return (event) => {
            event = event || dayTasks;
            if (document.querySelector(".active") !== this) {
                Task.clearAll();
                getTasks((response) => {
                    const tasks = JSON.parse(response.response);
                    Task.viewAll(tasks);
                });
            }
        };
    }

    function viewTask(task) {
        if (task) {
            const container = document.getElementById(task.container);
            const taskNode = document.createElement("div");
            taskNode.classList.add("task");
            taskNode.style.backgroundColor = task.colour;
            taskNode.innerHTML = `<p>${task.content}</p>`;
            container.appendChild(taskNode);
        }
    }

    Task.viewAll = function (tasks) {
        tasks.forEach((element) => {
            viewTask(element);
        });
    };

    Task.create = function (task) {
        requests.createTask(task);
        viewTask(task);
    };

    Task.clearAll = function () {
        for (let container of containers) {
            container.innerHTML = "";
        }
    };

    viewTasksIfActiveLink(requests.getDayTasks)();

    global.Task = Task;
})(window);
