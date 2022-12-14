var shapeX = 20;
var shapeY = 75;
var myXs = [];
var myYs = [];
var myDiameters = [];
var myXsSpeed = [];
var myYsSpeed = [];
function setup() {
  createCanvas(1200, 800);
  //randomspeeds
  for (var i = 0; i < 200; i++) {
    myXsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myYsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myXs[i] = getRandomNumber(700);
    myYs[i] = getRandomNumber(700);
    myDiameters[i] = getRandomNumber(10);
  }
}
function draw() {
  background(0, 0, 0);
  //mask base
  fill(255, 253, 208, 225);
  ellipse(625, 300, 200, 255);
  fill(0, 0, 0);
  circle(585, 280, 40);
  circle(665, 280, 40);
  fill(255, 0, 0);
  triangle(585, 250, 625, 270, 665, 250);
  triangle(555, 355, 585, 315, 565, 360);
  triangle(695, 355, 665, 315, 685, 360);
  //holes in mask forhead
  fill(0, 0, 0)
  circle(605, 240, 10)
  circle(645, 240, 10)
  circle(580, 235, 10)
  circle(670, 235, 10)
  circle(665, 217.5, 10)
  circle(585, 217.5, 10)
  circle(590, 200, 10)
  circle(660, 200, 10)
  //holes in mask mouth
  circle(585, 370, 10)
  circle(570, 380, 10)
  circle(605, 370, 10)
  circle(606, 390, 10)
  circle(606.5, 410, 10)
  circle(665, 370, 10)
  circle(680, 380, 10)
  circle(645, 370, 10)
  circle(644, 390, 10)
  circle(643.5, 410, 10)
  circle(625, 350, 10)
  //shading with nose
  noStroke();
  fill(0, 0, 0, 100)
  triangle(600, 340, 625, 360, 651, 340);
  fill(0, 0, 0, 90)
  ellipse(625, 340, 50, 5)
  //holes on sides of mask
  fill(0, 0, 0);
  ellipse(550, 345, 7.5, 10);
  circle(560, 335, 10);
  ellipse(543, 327, 7, 10);
  ellipse(700, 345, 7.5, 10);
  circle(690, 335, 10);
  ellipse(707, 327, 7, 10);
  //lights
  fill(255, 0, 0, 70)
  circle(10, 745, 100)
  fill(255, 0, 0)
  ellipse(10, 760, 20, 40)
  fill(128, 128, 128)
  rect(0, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(110, 745, 100)
  fill(0, 255, 0)
  ellipse(110, 760, 20, 40)
  fill(128, 128, 128)
  rect(100, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(210, 745, 100)
  fill(255, 0, 0)
  ellipse(210, 760, 20, 40)
  fill(128, 128, 128)
  rect(200, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(310, 745, 100)
  fill(0, 255, 0)
  ellipse(310, 760, 20, 40)
  fill(128, 128, 128)
  rect(300, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(410, 745, 100)
  fill(255, 0, 0)
  ellipse(410, 760, 20, 40)
  fill(128, 128, 128)
  rect(400, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(510, 745, 100)
  fill(0, 255, 0)
  ellipse(510, 760, 20, 40)
  fill(128, 128, 128)
  rect(500, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(610, 745, 100)
  fill(255, 0, 0)
  ellipse(610, 760, 20, 40)
  fill(128, 128, 128)
  rect(600, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(710, 745, 100)
  fill(0, 255, 0)
  ellipse(710, 760, 20, 40)
  fill(128, 128, 128)
  rect(700, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(810, 745, 100)
  fill(255, 0, 0)
  ellipse(810, 760, 20, 40)
  fill(128, 128, 128)
  rect(800, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(910, 745, 100)
  fill(0, 255, 0)
  ellipse(910, 760, 20, 40)
  fill(128, 128, 128)
  rect(900, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(1010, 745, 100)
  fill(255, 0, 0)
  ellipse(1010, 760, 20, 40)
  fill(128, 128, 128)
  rect(1000, 775, 20, 25)
  fill(0, 255, 0, 70)
  circle(1110, 745, 100)
  fill(0, 255, 0)
  ellipse(1110, 760, 20, 40)
  fill(128, 128, 128)
  rect(1100, 775, 20, 25)
  fill(255, 0, 0, 70)
  circle(1210, 745, 100)
  fill(255, 0, 0)
  ellipse(1210, 760, 20, 40)
  fill(128, 128, 128)
  rect(1200, 775, 20, 25)
  //snowspeeds
  for (var i = 0; i < myXs.length; i++) {
    fill(137, 170, 176)
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
  //MerryChristmas Design
  fill(255, 0, 0);
  stroke(10);
  textSize(100);
  text("Merry Christmas!", 250, 650);
  //hat
  fill(255, 0, 0)
  noStroke();
  triangle(560, 210, 625, 80, 690, 210)
  fill(255)
  circle(625, 80, 40)
  fill(255);
  ellipse(625, 215, 170, 50)
}
function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 5;
}

