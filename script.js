const gridEdge = 16;

const gridSizeQuery = document.createElement("h3");
gridSizeQuery.style.color = "black";
gridSizeQuery.textContent = "Enter the size of the grid (max 100).";
document.body.appendChild(gridSizeQuery);

const container = document.createElement("div");
container.style.cssText = "background: white; border: 3px solid black;";

const box = document.createElement("img");
for (i = 1; i <= gridEdge; i++) {
    box.appendChild(container);
}


document.body.appendChild(container);

