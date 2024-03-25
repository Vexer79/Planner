(function (global) {
    let Task = global.Task;
    let links = document.querySelectorAll("ul li>a");
    for (let link of links) {
        link.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active");
            Task.clearAll();
            viewTask(link);
        });
    }

    function viewTask(link) {
        const { [link.textContent]: currentTasks } = Task.getObjectReference;
        Object.entries(currentTasks).forEach(([key, value]) => {
            Object.values(value).forEach((taskContent) => {
                Task.create[key](taskContent);
            });
        });
    }

    Task.viewCurrentTasks = function () {
        viewTask(document.querySelector(".active"));
    };
    global.Task = Task;
})(window);
