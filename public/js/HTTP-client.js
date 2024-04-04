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

    requests.createTask = function (content) {
        ajaxUtils.sendFetchRequest(
            "http://localhost:3000/day",
            "POST",
            {
                "Content-type": "application/x-www-form-urlencoded",
            },
            {
                content: content,
                colour: "Red",
                startTime: "now",
                completeTime: "tomorrow",
                notifications: true,
                container: null,
                index: 0,
            }
        ).then(Task.create.notStarted({content, colour: "Red"}));
    };

    requests.getDayTasks = function () {
        ajaxUtils.sendGetRequest("http://localhost:3000/day", callback, true);
    };
    requests.getWeekTasks = function () {
        ajaxUtils.sendGetRequest("http://localhost:3000/week", callback, true);
    };
    requests.getMonthTasks = function () {
        ajaxUtils.sendGetRequest("http://localhost:3000/month", callback, true);
    };
    requests.getYearTasks = function () {
        ajaxUtils.sendGetRequest("http://localhost:3000/year", callback, true);
    };

    function callback(response) {
        const responseObject = Parser.getObjectFromJSON(response);
        Task.clearAll();
        Task.setFromObject(responseObject);
    }

    global.requests = requests;
})(window);
