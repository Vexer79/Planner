var tasks = {
    "D": {
        1: "day",
        2: "hi",
    },
    "W": {
        1: "week",
        2: "hi",
    },
    "M": {
        1: "month",
        2: "hi",
    },
    "Y": {
        1: "year",
        2: "hi",
    },
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
        Object.values(currentTasks).forEach(value => { Task.create(value) });
    }

    Task.viewCurrentTasks = function () {
        viewTaskOf(document.querySelector(".active"));
    }
    window.Task = Task;
})(window);