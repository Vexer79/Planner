function drag(containers) {
    return function (event) {
        let selected = event.target;
        for (let container of containers) {
            container.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            container.addEventListener("drop", function () {
                if (selected !== null) {
                    container.appendChild(selected);
                }
                selected = null;
            });
        }
    }
}

function touch(containers) {
    return function (event) {
        let selected = event.target;
        if (selected.className !== "task") {
            selected = selected.parentElement;
        }
        document.body.style.overflow = "hidden";
        for (let dragContainer of containers) {
            dragContainer.addEventListener("touchend", function (event) {
                let lastPosX = event.changedTouches[event.changedTouches.length - 1].clientX;
                let lastPosY = event.changedTouches[event.changedTouches.length - 1].clientY;
                for (let dropContainer of containers) {
                    if (dragContainer !== dropContainer) {
                        let pos = dropContainer.getBoundingClientRect();
                        if (pos.top < lastPosY && lastPosY < pos.bottom
                            && pos.left < lastPosX && lastPosX < pos.right) {
                            selected !== null && dropContainer.appendChild(selected);
                            selected = null;
                        }
                    }
                }
                document.body.style.overflow = "auto";
            });
        }
    }
}

function closeWindow(child) {
    return function () {
        const container = document.querySelector(".wrapper");
        container.removeChild(child);
    }
}

function openAddTaskMenu() {
    return function () {
        const addTaskWindowTemplate = document.getElementById("add-task-window-template");
        const container = document.querySelector(".wrapper");

        let taskWindow = addTaskWindowTemplate.content.cloneNode(true);
        container.appendChild(taskWindow);

        const addTaskButton = document.getElementById("add-task-button");
        const closeButton = document.getElementById("close-window-button");
        addTaskButton.addEventListener("click", createTask());
        closeButton.addEventListener("click", closeWindow(closeButton.parentNode));

    }
}

function createTask() {
    const notStartedTasksContainer = document.getElementById("not-started-tasks-container");
    const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");
    const containers = document.querySelectorAll(".task-body");
    return function () {
        const taskContent = new function () {
            const taskInput = document.getElementById("task-content");
            this.get = function () {
                return taskInput.value;
            }

            this.clear = function () {
                taskInput.value = "";
            }
        };
        console.log(taskContent.getVal);
        if (taskContent.get()) {
            const task = notStartedTasksTemplate.content.cloneNode(true);
            task.children[0].children[0].textContent = taskContent.get();
            task.children[0].addEventListener("dragstart", drag(containers));
            task.children[0].addEventListener("touchstart", touch(containers));
            taskContent.clear();
            notStartedTasksContainer.appendChild(task);
        }
    };
}