var tasks = {
    D: {
        notStarted: { 1: "day", 2: "hi" },
        inProcess: { 1: "testInProcess" },
        completed: { 1: "test" },
    },
    W: { notStarted: { 1: "week", 2: "hi" }, inProcess: {}, completed: {} },
    M: { notStarted: { 1: "month", 2: "hi" }, inProcess: {}, completed: {} },
    Y: { notStarted: { 1: "year", 2: "hi" }, inProcess: {}, completed: {} },
};

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
        const { [link.textContent]: currentTasks } = tasks;
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
