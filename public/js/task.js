(function (global) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");
    const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");
    const inProcessTasksTemplate = document.getElementById("in-process-tasks-template");
    const completedTasksTemplate = document.getElementById("completed-tasks-template");

    Task.create = {
        notStarted: function (taskContent) {
            createTask(notStartedTasksTemplate, containers[0], taskContent);
        },
        inProcess: function (taskContent) {
            createTask(inProcessTasksTemplate, containers[1], taskContent);
        },
        completed: function (taskContent) {
            createTask(completedTasksTemplate, containers[2], taskContent);
        },
    };

    function createTask(template, container, task) {
        if (task) {
            const taskNode = document.createElement("div");
            taskNode.classList.add("task");
            taskNode.style.backgroundColor = task.colour;
            taskNode.innerHTML = `<p>${task.content}</p>`;
            container.appendChild(taskNode);
        }
    }

    function getContainerId(element) {
        return element.id
            .replace("-tasks-container", "")
            .split("-")
            .join(" ")
            .replace(/\s\w/, (symb) => symb.trim().toUpperCase());
    }

    Task.createUsingInterface = function () {
        const taskContent = new (function () {
            const taskInput = document.getElementById("input-task-content");
            this.get = function () {
                return taskInput.value;
            };

            this.clear = function () {
                taskInput.value = "";
            };
        })();
        requests.createTask(taskContent.get());
        taskContent.clear();
    };

    Task.clearAll = function () {
        for (let container of containers) {
            let template = container.children[0];
            container.innerHTML = "";
            container.appendChild(template);
        }
    };

    global.Task = Task;
})(window);
