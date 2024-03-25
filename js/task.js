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

    function createTask(template, container, taskContent) {
        if (taskContent) {
            const task = template.content.cloneNode(true);
            task.children[0].children[0].textContent = taskContent;
            task.children[0].addEventListener("dragstart", DragAndDrop.drag);
            task.children[0].addEventListener("touchstart", DragAndDrop.touch);
            container.appendChild(task);
        }
    }

    Task.setGlobalObject = function (object) {
        Task.getObjectReference = Parser.getObjectFromJSON(object);
    };

    Task.setCurrentTasksOfContainerToTasks = function (container, currentTaskSection) {
        const containerObject = {};
        for (let i = 1; i < container.children.length; i++) {
            containerObject[i] = container.children[i].innerText;
        }
        const containerId = getContainerId(container);
        Task.getObjectReference[currentTaskSection][containerId] = containerObject;
        return containerObject;
    };

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
        Task.create.notStarted(taskContent.get());
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
