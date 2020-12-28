var car,wall;
var speed,weight;
var Deformation;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //assigning random speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //creating car sprite with velocity
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  //creating wall sprite
  wall=createSprite(1500,200,60,height/2);
 
}

function draw() {
  //adding background color
  background(255,255,255); 
  
  //detecting the collision
  if(car.x-wall.x <= (car.width/2 + wall.width/2) && 
  wall.x-car.x <= (car.width/2 + wall.width/2) &&
  car.y-wall.y <= (car.height/2 + wall.height/2) && 
  wall.y-car.y <= (car.height/2 + wall.height/2)){
   console.log(Deformation=0.5*weight*speed*speed/22500);
  }else{
    wall.shapeColor="yellow";
    car.shapeColor="yellow"; 
  }

  //adding colors to the car after th result of deformation
  if(Deformation<=100){
    car.shapeColor="green";
    car.velocityX=0;
    car.x=200;
  }

  //adding colors to the car after th result of deformation
  if(Deformation>100 && Deformation<180){
    car.shapeColor="yellow";
    car.velocityX=0;
    car.x=200;
  }

  //adding colors to the car after th result of deformation
  if(Deformation>180){
    car.shapeColor="Red";
    car.velocityX=0;
    car.x=200;
  }
  drawSprites();
}