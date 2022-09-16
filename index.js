document.addEventListener("DOMContentLoaded", function(){
//initialize canvas
const canvas = document.getElementById('playfield');

const ctx = canvas.getContext('2d');


pegs = [];
class peg{
  constructor(xPos, yPos, typeChoice){
    this.x = xPos;
    this.y = yPos;
    this.radius = 10;
    this.type = typeChoice;
    // Add type docuemtation here when you create more
    // type 0 is the default, blue peg
  }
}

// function to draw a peg
function drawPeg(drawnPeg){
    ctx.beginPath();
    ctx.arc(drawnPeg.x, drawnPeg.y, drawnPeg.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

drawPeg(new peg(100,100,0));
drawPeg(new peg(130,100,0));
drawPeg(new peg(160,100,0));
drawPeg(new peg(190,100,0));
drawPeg(new peg(220,100,0));
drawPeg(new peg(250,100,0));

//not used yet
function addPegs(){
  for (i = 0; i < 10; i++){
    pegs.push(new peg(1,1,0));
  }
};
function drawScreen(){
    drawPegs();
};

console.log(pegs);
});