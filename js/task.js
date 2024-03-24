(function (window) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");
    const notStartedTasksContainer = document.getElementById("not-started-tasks-container");
    const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");

    function drag(event) {
        let selected = event.target;
        for (let container of containers) {
            container.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            container.addEventListener("drop", function () {
                if (selected !== null) {
                    container.appendChild(selected);
                    selected = null;
                }
            });
        }
    }

    function touch(event) {
        let selected = event.target;
        if (selected.className !== "task") {
            selected = selected.parentElement;
        }
        document.body.style.overflow = "hidden";
        selected.parentNode.style.overflow = "hidden";
        for (let dragContainer of containers) {
            dragContainer.addEventListener("touchend", function (event) {
                let lastPosX = event.changedTouches[event.changedTouches.length - 1].clientX;
                let lastPosY = event.changedTouches[event.changedTouches.length - 1].clientY;
                for (let dropContainer of containers) {
                    if (dragContainer !== dropContainer) {
                        let pos = dropContainer.getBoundingClientRect();
                        if (
                            pos.top < lastPosY &&
                            lastPosY < pos.bottom &&
                            pos.left < lastPosX &&
                            lastPosX < pos.right
                        ) {
                            if (selected !== null) {
                                document.body.style.overflow = "auto";
                                selected.parentNode.style.overflow = "auto";
                                dropContainer.appendChild(selected);
                                selected = null;
                            }
                        }
                    }
                }
            });
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
        Task.create(taskContent.get());
        taskContent.clear();
    };

    Task.create = function (taskContent) {
        if (taskContent) {
            const task = notStartedTasksTemplate.content.cloneNode(true);
            task.children[0].children[0].textContent = taskContent;
            task.children[0].addEventListener("dragstart", drag);
            task.children[0].addEventListener("touchstart", touch);
            notStartedTasksContainer.appendChild(task);
        }
    };

    Task.clearAll = function () {
        for (let container of containers) {
            let template = container.children[0];
            container.innerHTML = "";
            container.appendChild(template);
        }
    };
    window.Task = Task;
})(window);

(function (window) {
    const createTaskWindow = {};
    const wrapper = document.querySelector(".wrapper");
    const createTaskWindowTemplate = document.getElementById("create-task-window-template");

    createTaskWindow.close = function () {
        wrapper.removeChild(document.querySelector(".create-task-window"));
    };

    createTaskWindow.open = function () {
        wrapper.appendChild(createTaskWindowTemplate.content.cloneNode(true));

        const createTaskButton = document.getElementById("create-task-button");
        const closeButton = document.getElementById("close-window-button");
        const taskInput = document.getElementById("input-task-content");

        taskInput.addEventListener("keyup", function (event) {
            event.key === "Enter" && Task.createUsingInterface();
        });
        createTaskButton.addEventListener("click", Task.createUsingInterface);
        closeButton.addEventListener("click", createTaskWindow.close);
    };

    window.createTaskWindow = createTaskWindow;
})(window);
