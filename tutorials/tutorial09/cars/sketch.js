const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 200,
    width: 200,
    speed: 5,
    color: 'green'
};

const c2 = {
    x: 100, 
    y: 700, 
    width: 200, 
    speed: 10, 
    color: 'blue'

}


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    // go and get the value of speed stored in the C1.speed variable 
    // and add it to the c1.x variable
    // 99% of the time, add 3 to the x position. 
    // but, when the x position gets to the end of the screen, 
    // set the x back to 0 

    if (c1.x > canvasWidth) {
        console.log
        c1.x = 0; 
    } else {
        c1.x += c1.speed;
    }

    if (c2.x < 0) {
        c2.x = canvasWidth; 
    } else {
        c2.x -= c2.speed; 
    }
    

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color); 
    
    // draw the grid (optional -- feel free to remove this line):
    //drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='white') {
    strokeWeight(1);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}