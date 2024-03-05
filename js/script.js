const notStartedTasksContainer = document.getElementById("not-started-tasks-container");
const notStartedTasksTemplate = document.getElementById("not-started-tasks-template");

const inProcessTasksContainer = document.getElementById("in-process-tasks-container");
const inProcessTasksTemplate = document.getElementById("in-process-tasks-template");

const completedTasksContainer = document.getElementById("completed-tasks-container");
const completedTasksTemplate = document.getElementById("completed-tasks-template");

const task1 = notStartedTasksTemplate.content.cloneNode(true);
task1.children[0].addEventListener("mouseup", mouseUpHandler);
task1.children[0].addEventListener("mousedown", mouseDownHandler);
notStartedTasksContainer.appendChild(task1);

const task2 = notStartedTasksTemplate.content.cloneNode(true);
task2.children[0].addEventListener("mouseup", mouseUpHandler);
task2.children[0].addEventListener("mousedown", mouseDownHandler);
notStartedTasksContainer.appendChild(task2);