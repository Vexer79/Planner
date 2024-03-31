(function () {
    const containers = document.querySelectorAll(".task-body");

    for (const container of containers) {
        new Sortable(container, {
            group: "shared",
            animation: 150,

            onEnd: function (event) {
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
        });
    }
})();
