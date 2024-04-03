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

    requests.createTask = function () {
        //make request to create task
        //on complete -> create task
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
        Object.entries(responseObject).forEach(([key, value]) => {
            Object.values(value).forEach((taskContent) => {
                Task.create[key](taskContent);
            });
        });
    }

    global.requests = requests;
})(window);
