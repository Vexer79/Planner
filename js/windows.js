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