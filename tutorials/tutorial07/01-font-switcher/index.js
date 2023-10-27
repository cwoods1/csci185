let sizeH1 = 40;
let sizeP = 20;


function makeBigger() {
   sizeH1 = sizeH1 + 5;
   sizeP = sizeP + 5;
   document.querySelector('.content').style.fontSize = sizeP + "px";
   document.querySelector('h1').style.fontSize = sizeH1 + "px";
}

function makeSmaller() {
   sizeH1 = sizeH1 - 5;
   sizeP = sizeP - 5;
   document.querySelector('.content').style.fontSize = sizeP + "px";
   document.querySelector('h1').style.fontSize = sizeH1 + "px";
}

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
