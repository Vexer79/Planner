const notStartedTasksContainer = document.getElementById("not-started-tasks-container");
const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");

const inProcessTasksContainer = document.getElementById("in-process-tasks-container");
const inProcessTasksTemplate = document.getElementById("in-process-tasks-template");

const completedTasksContainer = document.getElementById("completed-tasks-container");
const completedTasksTemplate = document.getElementById("completed-tasks-template");

const containers = document.querySelectorAll(".task-body");
const task1 = notStartedTasksTemplate.content.cloneNode(true);
task1.children[0].addEventListener("dragstart", drag(containers));
task1.children[0].addEventListener("touchstart", touch(containers));
notStartedTasksContainer.appendChild(task1);