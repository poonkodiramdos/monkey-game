//to create varibles
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
//to load animation and load image 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 
 //to createsprite,addanimation,scale for monkey , ground 
monkey=createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;  
  
ground=createSprite(400,350,900,10)
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
FoodGroup=createGroup();
obstacleGroup=createGroup(); 
  

}

function draw() {
  //to  create background
background("White");
  stroke("black")
  text(20);
  fill("black")
  //for survival time count
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime, 100,50);
  //call the food , obstacle here
  food();
  obstacles();
  
  // if space key presed monkey jump
  if(keyDown("space")){
   monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8
 
  //  for moving ground
  if(ground.x<0){
  ground.x=ground.width/2;      
     }
  monkey.collide(ground);
  
  // to set life time ,life velocity
  if(obstacleGroup.isTouching(monkey)){
   obstacleGroup.setLifetimeEach(-1);  
   FoodGroup.setLifetimeEach(-1); 
    
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    monkey.velocityY=0;
    
     }
 drawSprites(); 
}


//funtion food
function food(){
  if(frameCount % 80===0 ){
  
banana=createSprite(600,250,40,10);
banana.addImage(bananaImage)
banana.scale=0.06;
banana.velocityX=-2;
 
 banana.y=Math.round(random(120,200));
banana.lifetime=300;
FoodGroup.add(banana);    
  } 
}

//funtion obstacles
function obstacles(){
  if(frameCount % 80===0){
obstacle=createSprite(800,320,10,40);
obstacle.addImage(obstacleImage)
obstacle.velocityX=-3;
obstacle.scale=0.1;
 obstacle.lifetime=300;   
obstacleGroup.add(obstacle);
  }
 
}
