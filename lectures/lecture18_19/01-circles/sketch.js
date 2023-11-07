function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y = 0;
    while (y <= 1000){
        circle(100, y, 50);
        y += 25;
    }

    drawGrid(canvasWidth, canvasHeight);
}
