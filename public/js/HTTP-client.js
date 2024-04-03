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
        ajaxUtils.sendPostRequest(
            "http://localhost:3000/day",
            JSON.stringify({
                content: content,
                colour: "Red",
                startTime: "now",
                completeTime: "tomorrow",
                notification: true,
                container: null,
                index: 0,
            }),
            requests.getDayTasks
        );
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
        console.log(responseObject);
        Object.entries(responseObject).forEach(([key, value]) => {
            Object.values(value).forEach((task) => {
                Task.create[key](task);
            });
        });
    }

    global.requests = requests;
})(window);
