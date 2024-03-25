(function (window) {
    let Task = window.Task;
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
    window.Task = Task;
})(window);
