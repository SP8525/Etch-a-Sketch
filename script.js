// Take the container from HTML //
gridSide =10;

const container = document.getElementById("container");
console.log(container);

function drawBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.flex = `0 0 ${100 / gridSide}%`;
    box.style.aspectRatio = "1 / 1";
    container.appendChild(box);
}

function drawGrid() {
    container.replaceChildren();
    for (i = 0; i < gridSide * gridSide; i ++) {
    drawBox();
    }
}

drawGrid();

document.querySelectorAll(".box").forEach(boxEl => {
    boxEl.addEventListener("mouseover", () => {
        boxEl.style.backgroundColor = "red";
    });
});