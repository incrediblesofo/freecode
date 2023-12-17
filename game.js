let container = document.getElementById('container');
let btn = document.getElementsByClassName('btn');


let cell;
let gridSize = 10;


function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return RGBColor = "rgb(" + x + "," + y + "," + z + ")";
}



function makeGrid(size) {

    container.style.setProperty('--grid-column', size);
    container.style.setProperty('--grid-rows', size);

    for (let i = 0; i < size * size; i++) {
        cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('box');
    };
};

gameInit();

function mouseOverColorful() {
    container.addEventListener("mouseover", (event) => {
        return event.target.style.background = randomRGB();

    });
}

function mouseOverBlack() {
    container.addEventListener("mouseover", (event) => {
        return event.target.style.background = "black";

    });
}



btn[0].addEventListener("click", () => {

    container.innerHTML = '';

    gridSize = prompt("Enter a grid size(Between 1 and 100)");
    if (gridSize > 100 || gridSize < 1) {
        alert("Invalid Size! Try Again !");
        makeGrid(5);

    } else {
        makeGrid(gridSize);
    }

});

btn[0].addEventListener("click", () => {
    container.innerHTML = '';
    container.style.background = 'white';
    makeGrid(gridSize);
});

btn[1].addEventListener("click", (event) => {
    mouseOverBlack();
});

btn[3].addEventListener("click", (event) => {
    mouseOverColorful();
});

function gameInit() {
    mouseOverColorful();
    makeGrid(5);
}
