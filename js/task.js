function drag(containers) {
    return function (event) {
        let selected = event.target;
        for (let i = 0; i < containers.length; i++) {
            containers[i].addEventListener("dragover", function (event) {
                event.preventDefault();
            });
            containers[i].addEventListener("drop", function (event) {
                if (selected !== null) {
                    containers[i].appendChild(selected);
                }
                selected = null;
            });
        }
    }
}

function touch(containers) {
    return function (event) {
        let selected = event.target;
        if(selected.className !== "task"){
            selected = event.target.parentElement;
        }
        for (let i = 0; i < containers.length; i++) {
            let pos = new Object();
            for (let j = 0; j < containers.length; j++) {
                pos[j] = containers[j].getBoundingClientRect();
            }
            containers[i].addEventListener("touchend", function (event) {
                let lastPosX = event.changedTouches[event.changedTouches.length - 1].clientX;
                let lastPosY = event.changedTouches[event.changedTouches.length - 1].clientY;
                for (let i = 0; i < containers.length; i++) {
                    if (pos[i].top < lastPosY && lastPosY < pos[i].bottom
                        && pos[i].left < lastPosX && lastPosX < pos[i].right) {
                        if (selected !== null) {
                            containers[i].appendChild(selected);
                        }
                        selected = null;
                    }
                }
            });
        }
    }
}