(function (window) {
    let Task = window.Task;
    let links = document.querySelectorAll("ul li>a");
    for (let link of links) {
        link.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active");
            Task.clearAll();
            viewTaskOf(link);
        });
    }

    function viewTaskOf(link) {
        const { [link.textContent]: currentTasks } = Tasks.getObjectReference;
        Object.entries(currentTasks).forEach(([key, value]) => {
            Object.values(value).forEach((taskContent) => {
                Task.create[key](taskContent);
            });
        });
    }

    Task.viewCurrentTasks = function () {
        viewTaskOf(document.querySelector(".active"));
    };
    window.Task = Task;
})(window);
