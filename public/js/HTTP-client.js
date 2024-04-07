(function (global) {
    let requests = {};

    requests.changeTaskOrder = function (event) {
        var itemEl = event.item;
        console.log(itemEl, "onEnd");
        console.log(event);
        try {
            console.log(`---Call save function---`);
            console.log(`from container ${event.from}`);
            console.log(`to container ${event.to}`);
            console.log(`old index ${event.oldIndex}`);
            console.log(`new index ${event.newIndex}`);
        } catch (error) {
            console.log(error);
        }
    };

    requests.createTask = function (task) {
        ajaxUtils
            .sendFetchRequest(
                "http://localhost:3000/day",
                "POST",
                {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                task
            )
            .catch((error) => console.log(error));
    };

    requests.getDayTasks = function (callback) {
        ajaxUtils.sendGetRequest("http://localhost:3000/day", callback, true);
    };
    requests.getWeekTasks = function (callback) {
        ajaxUtils.sendGetRequest("http://localhost:3000/week", callback, true);
    };
    requests.getMonthTasks = function (callback) {
        ajaxUtils.sendGetRequest("http://localhost:3000/month", callback, true);
    };
    requests.getYearTasks = function (callback) {
        ajaxUtils.sendGetRequest("http://localhost:3000/year", callback, true);
    };

    global.requests = requests;
})(window);
