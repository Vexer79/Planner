let test = -1;
function mouseDownHandler(event) {
    function changePosition() {
        console.log(event);
        console.log({ x: event.clientX, y: event.clientY });
        let position = event.target.getBoundingClientRect();
        event.target.style.top = event.clientY - ((position.top + position.bottom) / 2) + "px";
        console.log(event);
    }

    changePosition.event = event;
    if (test == -1) {
        test = setInterval(changePosition, 100);
    }
}

function mouseUpHandler(event) {
    if (test != -1) {
        clearInterval(test);
        test = -1;
    }
    this.style.top = 0;
    console.log(event);
}