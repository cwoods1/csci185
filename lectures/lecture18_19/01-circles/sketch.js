function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y = 0;
    let y1 = 0;
    let w = 50
    let x = 0;
    while (y <= 600){
        circle(x, 150, w);
        circle(300, y1, w);
        circle(500, y, w);
        circle(700, y1, w);
        y += 5;
        y1 += 10,
        w += 1;
        x += 10;
    }

    drawGrid(canvasWidth, canvasHeight);
}
