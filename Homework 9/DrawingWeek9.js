function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(90,90,90);
  textSize(30);
  text("Hi! I'm Sam!", 325,550);
  text("An Awesome Portrait", 10,100)
  
  //head
  fill(255,204,0);
  circle(250,200,100);
  
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
    //hair
  fill(150, 75, 0);
    ellipse(250,160,80,30);

  //body
  fill(255, 0, 0);
  rect(200,250,100,150);
  
  //right arm
  rect(150,250,50,150)
  
  //left arm
  rect(300,250,50,150)
  
  //right leg
  fill(137, 207, 240)
  rect(200,400,50,150)
  
  //left leg
  rect(250,400,50,150)
  
   
}