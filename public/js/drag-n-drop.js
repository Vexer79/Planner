(function () {
    const containers = document.querySelectorAll(".task-body");

    for (const container of containers) {
        new Sortable(container, {
            group: "shared",
            animation: 150,
            onEnd: requests.changeTaskOrder,
        });
    }
})();
