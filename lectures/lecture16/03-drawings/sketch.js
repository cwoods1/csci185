function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("black");

    drawCreature(100, 100, 'red', 200, true);
    drawCreature(250, 250, 'orange', 250, false);
    drawCreature(400, 100, 'yellow', 75, true);
    drawCreature(550, 250, 'green', 50, true);
    drawCreature(900, 500, 'blue', 300, false);

    //triangle(200, 200, 100, 300, 200, 400)
    //triangle(300, 300, 200, 400, 400, 400)
    //triangle(300, 500, 200, 400, 400, 400)


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


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