let x = 100;
let y = 200;
let width = 100;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //noFill();
    //circle(x, y, width);
    drawCreature(x, y, fillColor, width, false)
    //drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    if (ev.code === "ArrowUp") {
        y = y - 3;
    } else if (ev.code === "ArrowDown") {
        y = y + 3;
    } else if (ev.code === "ArrowLeft") {
        x = x - 3;
    } else if (ev.code === "ArrowRight") {
        x = x + 3;
    } else if (ev.code === "Space") {
        width = width + 5;
    } else if (ev.code === "Escape") {
        width = width - 5;
    } else if (ev.code === "KeyR") {
        fillColor = "red";
    } else if (ev.code === "KeyB") {
        fillColor = "blue";
    } else if (ev.code === "KeyG") {
        fillColor = "green";
    } else if (ev.code === "KeyY") {
        fillColor = "yellow";
    }
    clear();
    fill(fillColor);
    //circle(x, y, width);
    drawCreature(x, y, fillColor, width, false)
    //drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);

function drawCreature(x, y, color, size, isZombie) {
    fill(color);
    //let size = 100;
    let eyeball = size / 7.5;
    circle(x, y, size); //base shape face
    
    if (isZombie) {
        fill ("red");
    } else {
            fill ("white")
        }
    


   // fill('white');
    
    
    circle(x + eyeball, y - eyeball, 2 * eyeball); //left eye
    circle(x - eyeball, y - eyeball, 2 * eyeball); //right eye
    fill ('black')
    circle(x + eyeball, y - eyeball, eyeball); //left eye
    circle(x - eyeball, y - eyeball, eyeball); //right eye

    }
