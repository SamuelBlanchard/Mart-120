//head or Circle
var circleHeadX=250;
var circleHeadY=200;
var headDirection = 1;

//ellipse
var ellipseHairX=250
var ellipseHairY=160

var movement;

//left leg
var leftLegX=200
var leftLegY=400
var leftLegDirection = 3;

//right leg
var rightLegX=250
var rightLegY=400

//torso
var torsoX=200
var torsoY=250
var torsoDirection = 4;

//text
var size = 22;
var count = 0;
var sizeDirection = 2;


function setup() {
  createCanvas(500, 600);
  movement = floor(random() * 10) + 1;
}

function draw() {
  background(90,90,90); 
  textSize(30);
  text("Hi! I'm Sam!", 325,550)
  
  
  
  //head and Hair
  {
  fill(255,204,0);
  circle(circleHeadX,circleHeadY,100)
  fill(150, 75, 0);
  ellipse(ellipseHairX,ellipseHairY,80,30)
   circleHeadX+=headDirection;
    if(circleHeadX >= 500 || circleHeadX <= 0)
    {
        headDirection *= -1;
    }
   ellipseHairX+=headDirection;
    if(ellipseHairX >= 500 || ellipseHairX <= 0)
    {
        headDirection *= -1;
    }
    
    
    
  //eyes
   strokeWeight(6);
    fill(0);
    point(230,190);
    point(270,190);
  
  //facial details
    //mouth
   triangle(243, 230, 258, 230, 250, 235);
    //eyebrows
  line(280, 180, 263, 180);
  line(220, 180, 237, 180);
    //nose
  triangle(241, 217, 250, 217, 250, 205);

  //torso
  fill(255, 0, 0);
  rect(torsoX,torsoY,100,150);
torsoX+=torsoDirection;
    if(torsoX >= 500 || torsoX <= 0)
    {
        torsoDirection *= -1;
    }
    torsoY+=torsoDirection;
    if(torsoY >= 600 || torsoY <= 0)
    {
        torsoDirection *= -1;
    }




    
  //right arm
  rect(150,250,50,150)
  
  //left arm
  rect(300,250,50,150)
  
  //left leg
  fill(137, 207, 240)
  rect(leftLegX,leftLegY,50,150)
 leftLegY+=leftLegDirection;
    if(leftLegY >= 600 || leftLegY <= 0)
    {
        leftLegDirection *= -1;
    }

  
  //right leg
  rect(rightLegX,rightLegY,50,150)
 rightLegY+=headDirection;
    if(rightLegY >= 600 || rightLegY <= 0)
    {
        headDirection *= -1;
    }
 fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("An awesome portrait",10,100 );

  
}
}
