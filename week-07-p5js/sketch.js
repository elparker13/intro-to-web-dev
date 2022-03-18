let x = 75;
let sunSpeed = 1;

function setup() {
  createCanvas(600, 600);
  background(155, 186, 189);

 //sun
noStroke();
  fill(242, 198, 51);
  ellipse(x, 150, 100, 100);

 //Initial Mountains
  fill(220)
  noStroke();
  triangle(100, 400, 500, 400, 300, 100);

  fill(200)
  noStroke();
  triangle(300, 400, 500, 400, 400, 200);
}


function draw() {

  //mountains
  var y = 400;
  stroke(255);
  strokeWeight(3);
  if(mouseIsPressed){
  line(mouseX, y, mouseX, mouseY);
 }

//water
fill(34, 155, 191);
  noStroke();
  rect(0, 400, 600, 300);

fill(65, 188, 224);
  noStroke();
  rect(100, 400, 400, 300);

fill(103, 213, 245);
  noStroke();
  rect(200, 400, 200, 300);

//title
  textSize(30);
  fill(255);
  textFont("Courier New");
  textAlign(CENTER);
  text("Create Your Own Mountains",300, 450);

  textSize(18);
  fill(255);
  textFont("Courier New");
  textAlign(CENTER);
  text("click and drag above to create beautiful mountains",300, 500);
}
