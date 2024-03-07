function drag(containers) {
    return function (event) {
        let selected = event.target;
        for (let container of containers) {
            container.addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            container.addEventListener("drop", function () {
                if (selected !== null) {
                    container.appendChild(selected);
                }
                selected = null;
            });
        }
    }
}

function touch(containers) {
    return function (event) {
        let selected = event.target;
        if (selected.className !== "task") {
            selected = selected.parentElement;
        }
        for (let dragContainer of containers) {
            dragContainer.addEventListener("touchend", function (event) {
                let lastPosX = event.changedTouches[event.changedTouches.length - 1].clientX;
                let lastPosY = event.changedTouches[event.changedTouches.length - 1].clientY;
                for (let dropContainer of containers) {
                    if (dragContainer !== dropContainer) {
                        let pos = dropContainer.getBoundingClientRect();
                        if (pos.top < lastPosY && lastPosY < pos.bottom
                            && pos.left < lastPosX && lastPosX < pos.right) {
                            if (selected !== null) {
                                dropContainer.appendChild(selected);
                            }
                            selected = null;
                        }
                    }
                }
            });
        }
    }
}