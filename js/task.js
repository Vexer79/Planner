(function (window) {
    let Task = {};
    const containers = document.querySelectorAll(".task-body");
    const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");
    const inProcessTasksTemplate = document.getElementById("in-process-tasks-template");
    const completedTasksTemplate = document.getElementById("completed-tasks-template");

    function drag(event) {
        let selected = event.target;
        const currentTaskSection = document.querySelector(".active").textContent;
        const parentContainer = this.parentElement;
        for (let container of containers) {
            container.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            container.addEventListener("drop", function () {
                if (selected !== null) {
                    container.appendChild(selected);
                    setCurrentTasksOfContanerToTasks(container, currentTaskSection);
                    setCurrentTasksOfContanerToTasks(parentContainer, currentTaskSection);
                    selected = null;
                }
            });
        }
    }

    function setCurrentTasksOfContanerToTasks(container, currentTaskSection) {
        const containerObject = {};
        for (let i = 1; i < container.children.length; i++) {
            containerObject[i] = container.children[i].innerText;
        }
        const containerId = getId(container);
        tasks[currentTaskSection][containerId] = containerObject;
        return containerObject;
    }

    function getId(element) {
        return element.id
            .replace("-tasks-container", "")
            .split("-")
            .join(" ")
            .replace(/\s\w/, (symb) => symb.trim().toUpperCase());
    }

    function touch(event) {
        let selected = event.target;
        const currentTaskSection = document.querySelector(".active").textContent;
        if (selected.className !== "task") {
            selected = selected.parentElement;
        }
        const parentContainer = selected.parentElement;
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
                                setCurrentTasksOfContanerToTasks(dropContainer, currentTaskSection);
                                setCurrentTasksOfContanerToTasks(
                                    parentContainer,
                                    currentTaskSection
                                );
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
        Task.create.notStarted(taskContent.get());
        taskContent.clear();
    };

    function createTask(template, container, taskContent) {
        if (taskContent) {
            const task = template.content.cloneNode(true);
            task.children[0].children[0].textContent = taskContent;
            task.children[0].addEventListener("dragstart", drag);
            task.children[0].addEventListener("touchstart", touch);
            container.appendChild(task);
        }
    }

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

    Task.clearAll = function () {
        for (let container of containers) {
            let template = container.children[0];
            container.innerHTML = "";
            container.appendChild(template);
        }
    };
    window.Task = Task;
})(window);
