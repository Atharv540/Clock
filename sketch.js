function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();

  stroke(255,100,150);
  strokeWeight(8);
  noFill();
  let end = map(seconds,0,60,0,360);
  arc(0,0,300,300,0,end);

  push();
  rotate(end);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  stroke(150,100,255);
  let end1 = map(minutes,0,60,0,360);
  arc(0,0,280,280,0,end1);
  push();
  rotate(end1);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  stroke(150,255,100);
  let end2 = map(hours % 12,0,12,0,360);
  arc(0,0,260,260,0,end2);

  push();
  rotate(end2);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);

  //fill(255);
  //text(hours+":"+minutes+":"+seconds,10,200)
}
