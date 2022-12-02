//player
var playerX = 100;
var playerY= 100;
//controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//shapes x and y
var shapeX = 20;
var shapeY = 75;
//mouseclickvar
var mouseShapeX;
var mouseShapeY;

var myXs = [];
var myYs = [];
var myDiameters = [];

var myXsSpeed = [];
var myYsSpeed = [];

function setup(){

  createCanvas(800,800);
  

 for (var i = 0; i < 5; i++) {
        myXsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = getRandomNumber(700);
        myYs[i] = getRandomNumber(700);
        myDiameters[i] = getRandomNumber(30);
 }

  createPlayer(100,100);
}

function draw() {
  background(100);
  
  
  drawPlayer();
  characterMovement();
  createBorders();
  exit();
  somehowWinner();
  createClickCircle();

  
fill(myXs)
 for (var i = 0; i < myXs.length; i++){
   
 circle(myXs[i], myYs[i], myDiameters[i]);
      myXsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      myYsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      myXs[i] += myXsSpeed[i];
      myYs[i] += myYsSpeed[i];
    

        if (myXs[i] > width) {
            myXs[i] = 0;
        }
        if (myXs[i] < 0) {
            myXs[i] = width;
        }
        if (myYs[i] > height) {
            myYs[i] = 0;
        }
        if (myYs[i] < 0) {
            myYs[i] = height;
        }
 }

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
  if(playerY > 770 && playerY < 1000 && playerX > 375 && playerX < 425)
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

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 50;
}

