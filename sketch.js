var car, wall;
var speed, weight, thikness;
var colord;

function setup() {
  createCanvas(1025,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
car = createSprite(50, 200, 40, 10);
car.velocityX=speed;
car.shapeColor="white";
wall = createSprite(925, 200, thikness, height/2);
wall.shapeColor=color(80,80,80);
colord=createSprite(512, 50, 50,50);
colord.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);  
  if (car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2) {
var deformation=0.5*weight*speed*speed/thikness*thikness*thikness;
if (deformation>10) {
  colord.shapeColor=color(255,0,0);
} else {
  colord.shapeColor=color(0,255,0);
}
car.velocityX=0;
    }

  drawSprites();
}