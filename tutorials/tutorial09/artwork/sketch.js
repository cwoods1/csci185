const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["blue ", "red", "green", "yellow", "orange", "purple", "hotpink"];

function randomFloat(min, max) {
    // min and max included 
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(20);
    //     let counter = 0; //create a variable called counter and set it to 0 
    //     while (counter < 500) { //is the counter <500, if so enter the block
    //     const i = randomInt(0, 4); //give me a number between 0 and 4 
    //     console.log("the index is:", i);
    //     fill(colors[i]); //pretend the i is 3: 

    //     // draw a random circle:
    //     let x = randomInt(0, canvasWidth); //pick a number between 0 and 1400? 
    //     let y = randomInt(0, canvasHeight);
    //     let size = randomFloat(12, 22); 
    //     console.log(x, y, size); //create a circle with the given variable 
    //     circle(x, y, size);
    //     counter += 1; 

    //     }

}


// // anything that you want to animate goes in this function: 
let counter = 0;
function draw() {
    const i = randomInt(0, 4); //give me a number between 0 and 4 
    console.log("the index is:", i);
    fill(colors[i]); //pretend the i is 3: 

    // draw a random circle:
    let x = randomInt(0, canvasWidth); //pick a number between 0 and 1400? 
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(12, 22);
    console.log(x, y, size); //create a circle with the given variable 
    //circle(x, y, size); 
    //x = randomInt(0, canvasWidth); 
    //y = randomInt(0, canvasHeight);
    counter += 1;
    let multiplier1 = randomInt(-1, 1);
    let multiplier2 = randomInt(-1, 1);
    if (counter % 5 == 0) {
        square(x, y, size);
    } else if (counter % 5 == 1) {
        circle(x, y, size);
    } else {
        line(x, y, x + multiplier1 * size, y + multiplier2 * size)
    }

}



// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);