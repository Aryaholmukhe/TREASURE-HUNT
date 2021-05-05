var bg,treasure,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  treasure = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen

  fill("white")
  textSize(50)
  text("Score: "+score, 450, 70)

  // Add code to display the end screen

  if(score ===3){
    clear()
    background(treasure)
    textSize(50)
    fill("white")
    text("TREASURE UNLOCKED", 250, 200)
  }
  drawSprites()
}