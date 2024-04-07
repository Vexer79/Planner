(function (global) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");

    Task.create = {
        notStarted: function (taskObject) {
            createTask(containers[0], taskObject);
        },
        inProcess: function (taskObject) {
            createTask(containers[1], taskObject);
        },
        completed: function (taskObject) {
            createTask(containers[2], taskObject);
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
        const taskObject = new (function () {
            const taskInput = document.getElementById("input-task-content");
            const taskColour = document.getElementById("task-colour");
            this.get = function () {
                return { content: taskInput.value, colour: taskColour.value };
            };

            this.clear = function () {
                taskInput.value = "";
            };
        })();
        if (taskObject.get().content) {
            requests.createTask(taskObject.get());
            taskObject.clear();
        }
    };

    Task.setFromObject = function (object) {
        Object.values(object).forEach((task) => {
            Task.create.notStarted(task);
        });
    };

    Task.clearAll = function () {
        for (let container of containers) {
            container.innerHTML = "";
        }
    };

    global.Task = Task;
})(window);
