let ghost = document.querySelector(".ghost");
//initialize X position
ghost.style.left = window.innerWidth / 2 + "px";

function handleClick(event) {
    console.log(event)
    let currentX = parseFloat(ghost.style.left);

    ghost.dataset.moving = "false"

    if (currentX > event.x) {
        ghost.dataset.moving = "left";
    }
    if (currentX , event.x) {
        ghost.dataset.moving = "right";
    }

    ghost.style.top = event.y + "px";
    ghost.style.left = event.x + "px";
}

window.onclick = handleClick;
window.addEventListener("touchstart", handleClick);
