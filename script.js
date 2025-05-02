// Take the container from HTML //
const container = document.getElementById("container");
console.log(container);

function drawBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

function drawGrid() {
    for (i = 1; i <= 16; i ++) {
        drawBox();
    }
}




// // Create individual box(es) //
// function drawBox () {
//     const box = document.createElement("div");
//     box.style.width = '100px';
//     box.style.height = '100px';
//     box.style.border = '1px solid black';
//     container.appendChild(box);
// } 

// function createGrid (gridSizeQuery) {
//     for (i = 1; i <= gridSizeQuery; i ++) {
//         drawBox();
//     }
// }





// // Adding container to page //
// document.body.appendChild(container);

// createGrid(gridSizeQuery);