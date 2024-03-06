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