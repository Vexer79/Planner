(function (global){
    ajaxUtils.sendGetRequest("http://localhost:3000/tasks", Task.setGlobalObject, false);

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
    }

    requests.createTask = function(){
        //make request to create task
        //on complete -> create task
    }

    global.requests = requests;
})(window);