var path, runner;
var pathImage, runnerImage;
var blockLeft,blockRight;
var edges;

function preload(){
  pathImage=loadImage("path.png");
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage("caminho",pathImage);
  runner=createSprite(18,340,30,30);
  runner.addAnimation("caminhante",runnerImage);
  runner.scale=0.05;
  blockLeft=createSprite(0,0,100,800);
  blockLeft.visible=false;
  blockRight=createSprite(410,0,100,800);
  blockRight.visible=false;
}

function draw() {
  background(0);
  runner.x=World.mouseX;
  edges=createEdgeSprites();
  runner.collide(blockLeft);
  runner.collide(blockRight);
  path.velocityY=10
  if(path.y>400) {
    path.y=height/2
  }
  drawSprites();
}