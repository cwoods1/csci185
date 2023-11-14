let x = 100;
let y = 100;
let width = 150;

let x1 = 1200
let y1 = 300
let width1 = 100
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;
    y += 10
    // if (x < 500) {
    //     x = canvasWidth + 200;
    // }

    x1 -= speed;
    if (x1 < -100) {
        x1 = canvasWidth + 200;
    }
    

    clear();
    fill("red");
    circle(x, y, width);
    circle(x1, y1, width1);
    drawGrid(canvasWidth, canvasHeight);
}
