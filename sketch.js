var bg,sleep,brush,gym,drink,eat,move,astronaut,edges,bath;

function preload(){
bg=loadImage("images/iss.png");
sleep=loadImage("images/sleep.png");
brush=loadImage("images/brush.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
gym=loadAnimation("images/gym1.png","images/gym2.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
move=loadAnimation("images/move1.png","images/move2.png");
bath=loadAnimation("images/bath1.png","images/bath2.png")
}

function setup() {
  createCanvas(600, 500);
  
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  
}

function draw() {
 background(bg);

 textSize(25);
 fill("white");
 text("Instructions:",20,35);
 textSize(20);
 text("Up Arrow=Brushing",20,60);
 text("Down Arrow=Gymming",20,80);
 text("Left Arrow=Eating",20,100);
 text("Right Arrow=Bathing",20,120);
 text("m=moving",20,140);

 edges=createEdgeSprites();
 astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
 
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  //astronaut.y=350;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}
  drawSprites();

  
}