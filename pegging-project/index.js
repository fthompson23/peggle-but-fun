/*
TODO:
Figure out how to add each peg to array "pegs"
Make drawAllPegs function that calls drawPeg for each peg in array pegs
Impliment collision
- Add collision checker funtion that compares each peg to each ball(by cycling through arrays)
Add update function
- Should clears the field each frame and calls on other functions
Add function(s) for handling a peg when it's hit
Potential features:
- Playfield object that stores things like window size(and using those values to set the size of the actual div)
*/

document.addEventListener("DOMContentLoaded", function(){
	//initialize canvas
	const canvas = document.getElementById('playfield');

	const ctx = canvas.getContext('2d');
	// initialize pegs
	var pegs = [];
	class peg {
	  constructor(xPos, yPos, typeChoice){
		this.x = xPos;
		this.y = yPos;
		this.radius = 10;
		this.type = typeChoice;
		pegs.push(this);
		// Add type docuemtation here when you create more types
		// type 0 is the default, blue peg
		// type 1 is the orange peg
	  }
	}
	
	var balls = [];
	class ball {
		constructor(){
		//x and y position are set to the top middle of the playfield by default
		this.x = 250;
		this.y = 0;
		//velocity are TBD
		this.velocityX = 0;
		this.velocityY = 0;
		this.baseVelocity;
		this.radius = 8;
		this.angle = 0;
		// the rate at which the ball accelerates downwards
		this.gravity = 0.5;
		// the maximum downwards speed for the ball
		this.maxGravity = 30;
		balls.push(this);
		}
	}
/////////////////////////// draw functions ///////////////////////////
	// function to draw an individual peg
	function drawPeg(drawnPeg){
		ctx.beginPath();
		ctx.arc(drawnPeg.x, drawnPeg.y, drawnPeg.radius, 0, 2 * Math.PI, false);
		//color the peg differently depending on type
		if (drawnPeg.type == 1){
			ctx.fillStyle = 'orange';
		} else {
			ctx.fillStyle = 'blue';
		}
		ctx.fill();
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	};

	function drawAllPegs(arr){
		for (i = 0; i < arr.length; i++){
		drawPeg(arr[i]);
		}
	};

	function drawBall(drawnBall){
		ctx.beginPath();
		ctx.arc(drawnBall.x, drawnBall.y, drawnBall.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'grey';
		ctx.fill();
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	};
	
	function drawAllBalls(arr){
		for (i = 0; i < arr.length; i++){
			drawBall(arr[i]);
		}
	};

	function drawScreen(){
		updateAllBalls(balls);
		drawAllPegs(pegs);
		drawAllBalls(balls);
	};	
//////////////////////// update functions ////////////////////////////////
	function updateBall(ballUpdate){
		ballUpdate.velocityY += ballUpdate.gravity;
		if (ballUpdate.velocityY > ballUpdate.maxGravity){
			ballUpdate.velocityY = ballUpdate.maxGravity;
		}
		ballUpdate.x += ballUpdate.velocityX;
		ballUpdate.y += ballUpdate.velocityY;
	};
	
	function updateAllBalls(arr){
		for (i = 0; i < arr.length; i++){
		updateBall(arr[i]);
		}
	};
///////////////////////// collision ////////////////////////////
	function collidePeg(collisionBall, collisionPeg){
		if (((collisionPeg.y - collisionPeg.radius)  < (collisionBall.y + collisionBall.radius)) && ((collisionPeg.y + collisionPeg.radius) > (collisionBall.y - collisionBall.radius))) {
          console.log("collision");
		}
	};
	
	function checkAllPegCollision(ballArray, pegArray){
		//for each ball, check its collision with each peg
		for (i = 0; i < ballArray.length; i++){
			for (j = 0; j < pegArray.length; j++){
				collidePeg(ballArray[i], pegArray[j]);
			}
		}
	};
	////main code ////
	//create pegs
	new peg(100,100,0);
	new peg(130,100,0);
	new peg(160,100,0);
	new peg(190,100,0);
	new peg(220,100,0);
	new peg(250,100,0);
	new ball();
  
	setInterval(gameLoop, 33);
	function gameLoop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    	drawScreen();
		updateAllBalls(balls);
		checkAllPegCollision(balls, pegs);
	}
});