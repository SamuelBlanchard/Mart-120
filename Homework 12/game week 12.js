//player
var playerX = 100;
var playerY= 100;
//controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//Obstacle 1
var squareX=400;
var squareY=400;
var squareXSpeed;
var squareYSpeed;
//obstacle 2
var rectX=200
var rectY=600
var rectXSpeed;
var rectYSpeed;
//mouseclickvar
var mouseShapeX;
var mouseShapeY;





function setup() {
  createCanvas(800, 800);
  
}



function draw() {
  background(100);
  
  //call functions
  drawPlayer();
  createObstacles();
  characterMovement();
  rectSpeed();
  squareSpeed();
  createBorders();
  exit();
  somehowWinner();
  createClickCircle();
}




//ALL FUNCTIONS
function createPlayer(x,y)
  {
    playerX = x;
    playerY = y;
    console.log(playerX);
  }

 //character movement (wasd controls)
  function characterMovement()
  {
   if(keyIsDown(w))
    {
        playerY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerY += 10;   
    }
    if(keyIsDown(a))
    {
        playerX -= 10;  
        console.log("movement: " + playerX);
    }
    if(keyIsDown(d))
    {
        playerX += 10;   
    }
  }

 //character
  function drawPlayer()
  {
  fill(0,0,255);
  circle(playerX,playerY,20);
  }
  
  //obstacle 1&2
  function createObstacles()
    {
  fill(255,0,0);
  square(squareX,squareY,40);
  fill(0,255,0);
  rect(rectX,rectY,50,100);
    }
  
 function squareSpeed()
  {
  squareXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  squareYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  squareX += squareXSpeed
  squareY += squareYSpeed
  if(squareX > width)
    {
      squareX = 0;
    }
  if(squareX < 0)
    {
      squareX = width
    }
  if(squareY > height)
    {
      squareY = 0;
    }
  if(squareY <0)
    {
      squareY = height;
    }
  }

 //obstacle 2
    function rectSpeed()
  {
    rectXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    rectYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  rectX += rectXSpeed
  rectY += rectYSpeed
  if(rectX > width)
    {
      rectX = 0;
    }
  if(rectX < 0)
    {
      rectX = width
    }
  if(rectY > height)
    {
      rectY = 0;
    }
  if(rectY <0)
    {
      rectY = height;
    }
  }

 //borders
  function createBorders()
  {
  rect(0,0,20,800);
  rect(0,0,800,20);
  rect(780,0,20,800);
  }

  //exit
function exit()
  {
  fill(255,255,0)
  rect(375,760,20,40);
  rect(425,760,20,40);
  rect(0,780,375,20);
  rect(445,780,375,20);
  }

 //recognize player left
  function somehowWinner()
  {
  if(playerY > 770 && playerY < 1000)
    {
    fill(0);
    stroke(5);
    textSize(26);
    text("wow.. you won?!", width/2-50, height/2-50);
    }
  }

  //mouseclick
  function createClickCircle()
  {
  fill(255,0,255);
  circle(mouseShapeX,mouseShapeY,20);
  }

//mouseclickfunction
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}