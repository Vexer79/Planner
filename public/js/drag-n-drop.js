import Sortable from "sortablejs";
(function () {
    const containers = document.querySelectorAll(".task-body");

    for (const container of containers) {
        new Sortable(container, {
            group: "shared", // set both lists to same group
            animation: 150,
        });
    }
})();
