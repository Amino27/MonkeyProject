var jungle,jungleimg,ground ,monkey,mokeyimg,stone,stoneimg,banana;
var bananaimg,bananagrp,stonegrp ,win,winimg; 
var score = 0 ;

var database;

function preload (){
  jungleimg = loadImage ("jungle.jpg");
  monkeyimg = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  stoneimg = loadImage("stone.png");
  bananaimg = loadImage ("banana.png");
  winimg = loadImage ("you won.jpg");
}

function setup() {
  createCanvas(800,900);
  
  jungle = createSprite (0,20,1000,400);
  jungle.addImage(jungleimg);
  jungle.scale = 1.5;
  ground = createSprite (0,350,800,10);
  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("running",monkeyimg);
  monkey.scale = 0.1 ;
  ground.visible = false ; 
  bananagrp = new Group();
  stonegrp = new Group();
  score = 0 ;
  
}

function draw() {
  background(220);
  jungle.velocityX = -3 ; 
  ground.velocityX = -3 ;
  
  if(jungle.x<100){
    jungle.x = jungle.width/2;
  }
  if(ground.x<400){
    ground.x = ground.width/2 ;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  if(monkey.isTouching(stonegrp)){
    gameState = 2;
  }
  if(stonegrp.isTouching(monkey)) {
    stonegrp.setVelocityXEach(0);
    stonegrp.setVelocityXEach(0);
    stonegrp.setLifetimeEach(-1);
    bananagrp.setLifetimeEach(-1);
  }
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY +0.8;
  spawnObstacles();
  spawnbanana();
  if(monkey.isTouching(bananagrp)){
    bananagrp.destroyEach(); 
    score = score+2;
  }
  switch(score){
    case 2 : monkey.scale = 0.12;
      break;
       case 4 : monkey.scale = 0.13;
      break;
       case 6 : monkey.scale = 0.14;
      break;
       case 8 : monkey.scale = 0.15;
      break;
       case 10 : monkey.scale = 0.16;
      break;
       case 12 : monkey.scale = 0.17;
      break;
       case 14 : monkey.scale = 0.18;
      break;
       case 16 : monkey.scale = 0.19;
      break;
       case 18 : monkey.scale = 0.2;
      break;
       case 20 : monkey.scale = 0.21;
      break;
       case 22 : monkey.scale = 0.22;
      break;
       case 24: monkey.scale = 0.23;
      break;
       case 26 : monkey.scale = 0.24;
      break;
       case 28 : monkey.scale = 0.25;
      break;
       case 30 : monkey.scale = 0.26;
      break;
      default:break;
  }
  if(monkey.isTouching(stonegrp)){
    monkey.scale = 0.1;
    score = 0 ;
  }
  if(score===30){
    bananagrp.destroyEach();
    monkey.visible = false;
    jungle.velocityX  = 0; 
    stonegrp.destroyEach();
    win = createSprite (400,150,10,10);
    win.addImage (winimg);
    win.scale = 0.3 ;
  }
  
  drawSprites();
  stroke("red");
  fill("white");
  textSize (20);
  text ("SCORE - "+score,500,50);
}

function spawnObstacles(){
  if(frameCount%200 === 0 ){
    stone = createSprite(800,320,10,10);
    stone.addImage (stoneimg);
    stone.velocityX = -4; 
    stone.scale = 0.2;
    stone.lifetime = 200 ;
    stonegrp.add(stone)
  }
}

function spawnbanana(){
  if(frameCount%100===0){
    banana = createSprite (800,230,10,10);
    banana.addImage (bananaimg);
    banana.scale = 0.06;
    banana.velocityX = -4;
    banana.y = random(100,250);
    bananagrp.add(banana);
    banana.lifetime = 200;
  }
}





