(function (global) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");

    Task.create = {
        notStarted: function (taskContent) {
            createTask(containers[0], taskContent);
        },
        inProcess: function (taskContent) {
            createTask(containers[1], taskContent);
        },
        completed: function (taskContent) {
            createTask(containers[2], taskContent);
        },
    };

    function createTask(container, task) {
        if (task) {
            const taskNode = document.createElement("div");
            taskNode.classList.add("task");
            taskNode.style.backgroundColor = task.colour;
            taskNode.innerHTML = `<p>${task.content}</p>`;
            container.appendChild(taskNode);
        }
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

    Task.setFromObject = function (object) {
        Object.entries(object).forEach(([key, value]) => {
            Object.values(value).forEach((task) => {
                Task.create[key](task);
            });
        });
    };

    Task.clearAll = function () {
        for (let container of containers) {
            container.innerHTML = "";
        }
    };

    global.Task = Task;
})(window);
