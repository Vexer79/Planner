var tasks = {
    "D": {
        1: "hello",
        2: "hi",
    },
    "W": new Object(),
    "M": new Object(),
    "Y": new Object(),
};

(function () {
    getDailyTasks();
    let links = document.querySelectorAll("ul li>a");
    for (let link of links) {
        link.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            link.classList.add("active");
            clearAllTasks();
            viewTaskOf(link);
        });
    }

    function viewTaskOf(link) {
        for (let i = 1; i < Object.keys(tasks[link.textContent]).length + 1; i++) {
            createTask(tasks[link.textContent][i]);
        }
    }

    function getDailyTasks() {
        let dailyLink = document.querySelector("ul li>a:first-child");
        console.log(tasks[dailyLink.textContent]);
        viewTaskOf(dailyLink);
    }
})();

(function () {

})();
