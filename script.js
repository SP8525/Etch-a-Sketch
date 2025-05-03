let gridSide = 16;
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  
const container = document.getElementById("container");

function drawBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.flex = `0 0 ${100 / gridSide}%`;
  // keep square
  box.style.aspectRatio = "1 / 1";
  container.appendChild(box);
}

function drawGrid() {
  container.replaceChildren();

  for (let i = 0; i < gridSide * gridSide; i++) {
    drawBox();
  }
}

drawGrid();

container.addEventListener("mouseover", element => {
  if (element.target.classList.contains("box")) {
    element.target.style.backgroundColor = getRandomColor();
  }
});

const sizeButton = document.getElementById("query-size-button");
sizeButton.addEventListener("click", () => {
  const input = prompt("Enter grid size (1–100):", gridSide);
  if (input === null) return;           // user canceled

  const n = Number(input);
  if (Number.isInteger(n) && n >= 1 && n <= 100) {
    gridSide = n;
    drawGrid();
  } else {
    alert("Please enter a whole number from 1 to 100.");
  }
});