(function (global) {
    let DragAndDrop = {};
    const containers = document.querySelectorAll(".task-body");

    DragAndDrop.drag = function (event) {
        let selected = event.target;
        const currentTaskSection = document.querySelector(".active").textContent;
        const parentContainer = selected.parentElement;
        for (let container of containers) {
            container.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            container.addEventListener("drop", function () {
                if (selected !== null) {
                    container.appendChild(selected);
                    Task.setCurrentTasksOfContainerToTasks(container, currentTaskSection);
                    Task.setCurrentTasksOfContainerToTasks(parentContainer, currentTaskSection);
                    selected = null;
                }
            });
        }
    };

    DragAndDrop.touch = function (event) {
        let selected = event.target;
        const currentTaskSection = document.querySelector(".active").textContent;
        if (selected.className !== "task") {
            selected = selected.parentElement;
        }
        const parentContainer = selected.parentElement;
        document.body.style.overflow = "hidden";
        selected.parentNode.style.overflow = "hidden";
        for (let dragContainer of containers) {
            dragContainer.addEventListener("touchend", function (event) {
                let lastPosX = event.changedTouches[event.changedTouches.length - 1].clientX;
                let lastPosY = event.changedTouches[event.changedTouches.length - 1].clientY;
                for (let dropContainer of containers) {
                    if (dragContainer !== dropContainer) {
                        let pos = dropContainer.getBoundingClientRect();
                        if (
                            pos.top < lastPosY &&
                            lastPosY < pos.bottom &&
                            pos.left < lastPosX &&
                            lastPosX < pos.right
                        ) {
                            if (selected !== null) {
                                document.body.style.overflow = "auto";
                                selected.parentNode.style.overflow = "auto";
                                dropContainer.appendChild(selected);
                                Task.setCurrentTasksOfContainerToTasks(
                                    dropContainer,
                                    currentTaskSection
                                );
                                Task.setCurrentTasksOfContainerToTasks(
                                    parentContainer,
                                    currentTaskSection
                                );
                                selected = null;
                            }
                        }
                    }
                }
            });
        }
    };

    global.DragAndDrop = DragAndDrop;
})(window);
