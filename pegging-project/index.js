/*
TODO:
Figure out how to add each peg to array "pegs"
Make drawAllPegs function that calls drawPeg for each peg in array pegs
Impliment ball & collision
- Add ball class(radius, x and y velocity, x and y pos)
- Add collision checker funtion that compares each peg to each ball(by cycling through arrays)
- Add update function that clears the field each frame and calls on other functions

Potential features:
- Playfield object that stores things like window size(and using those values to set the size of the actual div)
*/

document.addEventListener("DOMContentLoaded", function(){
//initialize canvas
const canvas = document.getElementById('playfield');

const ctx = canvas.getContext('2d');

var pegs = [];
class peg{
  constructor(xPos, yPos, typeChoice){
    this.x = xPos;
    this.y = yPos;
    this.radius = 10;
    this.type = typeChoice;
	pegs.push(this);
    // Add type docuemtation here when you create more types
    // type 0 is the default, blue peg
  }
}

// function to draw an individual peg
function drawPeg(drawnPeg){
    ctx.beginPath();
    ctx.arc(drawnPeg.x, drawnPeg.y, drawnPeg.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

function drawAllPegs(arr){
	for (i = 0; i < arr.length; i++){
	drawPeg(arr[i]);
	}
}

drawPeg(new peg(100,100,0));
drawPeg(new peg(130,100,0));
drawPeg(new peg(160,100,0));
drawPeg(new peg(190,100,0));
new peg(220,100,0);
new peg(250,100,0);

function drawScreen(){
    drawAllPegs(pegs);
};	
//debug
	document.getElementById("debug").innerHTML = pegs;

console.log(pegs);
});