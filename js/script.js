function createTaskFactory() {
    const notStartedTasksContainer = document.getElementById("not-started-tasks-container");
    const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");
    const containers = document.querySelectorAll(".task-body");
    return function (taskContent) {
        const task = notStartedTasksTemplate.content.cloneNode(true);
        task.children[0].children[0].textContent = taskContent;
        task.children[0].addEventListener("dragstart", drag(containers));
        task.children[0].addEventListener("touchstart", touch(containers));
        notStartedTasksContainer.appendChild(task);
    };
}

const createTask = createTaskFactory();
createTask("hello");
createTask("hello1");