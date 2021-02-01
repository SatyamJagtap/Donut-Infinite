//declare all the variables
var donutS1,donutP1,donutG1;
var donutS2,donutP2,donutG2;
var donutS3,donutP3,donutG3;
var donutS4,donutP4,donutG4;
var donutS5,donutP5,donutG5;
var bowl,bowlP;
var germS,germP1,germpP2,germG;
//var score1,score2,score3,score4,score5;
//var score_1,score_2,score_3,score_4,score_5;
var donutRand;
var germRand;
var life;
var gamestate;
var score;
function preload(){
  //load all the images
  donutP1 = loadImage("donut_1.png");
  donutP2 = loadImage("donut_2.png");
  donutP3 = loadImage("donut_3.png");
  donutP4 = loadImage("donut_4.png");
  donutP5 = loadImage("donut_5.png");
  bowlP = loadImage("sprite_0.png");
  germP1 = loadImage("germ_1.png");
  germP2 = loadImage("germ_2.png");
}

function setup() {
  //make canvas
  createCanvas(windowWidth,windowHeight);
  gamestate = "play";
  life = 4;
  score = 0;
  //score_1 = 0;
  //score_2 = 0;
  //score_3 = 0;
  //score_4 = 0;
  //score_5 = 0;
  //define all groups
  donutG1 = createGroup();
  donutG2 = createGroup();
  donutG3 = createGroup();
  donutG4 = createGroup();
  donutG5 = createGroup();
  germG = createGroup();
  //define Sprites
  bowl = createSprite(windowWidth/2,windowHeight-50,20,20);
  bowl.addImage(bowlP);
  bowl.scale = 0.4;
  //score1 = createSprite(windowWidth/6-25,50,20,20);
  //score1.addImage(donutP1);
  //score1.scale = 0.07;
  //score2 = createSprite(windowWidth/6*2-25,50,20,20);
  //score2.addImage(donutP2);
  //score2.scale = 0.07;
  //score3 = createSprite(windowWidth/6*3-25,50,20,20);
  //score3.addImage(donutP3);
  //score3.scale = 0.07;
  //score4 = createSprite(windowWidth/6*4-25,50,20,20);
  //score4.addImage(donutP4);
  //score4.scale = 0.07;
  //score5 =  createSprite(windowWidth/6*5-25,50,20,20);
  //score5.addImage(donutP5);
  //score5.scale = 0.07;
  textSize(30);
}

function draw() {
  background("lightPink");
  donutRand = Math.round(random(1,5));
  germRand = Math.round(random(1,2));
  fill("purple");
  text("Score = "+score,windowWidth/2-60,windowWidth/5);
  //fill("black");
  //text(score_1+"/20",score1.x+25,score1.y);
  //text(score_2+"/20",score2.x+25,score2.y);
  //text(score_3+"/20",score3.x+25,score3.y);
  //text(score_4+"/20",score4.x+25,score4.y);
  //text(score_5+"/20",score5.x+25,score5.y);
  //textSize = 25;
  fill("green");
  text("Life = "+life,windowWidth/2-50,windowHeight/4-50);
  //bowl.debug = true;
  bowl.setCollider("rectangle",0,0,200,200);
  if(gamestate == "play"){
    bowl.x = World.mouseX;
  if(frameCount%30===0){
    if(donutRand == 1){
      donut1();
    } 
    if(donutRand == 2){
      donut2();
    }
    if(donutRand == 3){
      donut3();
    }
    if(donutRand == 4){
      donut4();
    }
    if(donutRand == 5){
      donut5();
    }
  }
  if(frameCount%70===0){
    if(germRand == 1){
      germ1();
    }
    if(germRand == 2){
      germ2();
    }
  }
  //textSize = 15;
  if(bowl.isTouching(donutG1)){
    donutG1[0].destroy();
    //if(score_1<25){
    //  score_1 = score_1+1;
    //}
    score = score+1;
  }
  if(bowl.isTouching(donutG2)){
    donutG2[0].destroy();
    //if(score_2<25){
    //  score_2 = score_2+1;
    //}
    score = score+1;
  }
  if(bowl.isTouching(donutG3)){
    donutG3[0].destroy();
    //if(score_3<25){
    //  score_3 = score_3+1;
    //}
    score = score+1;
  }
  if(bowl.isTouching(donutG4)){
    donutG4[0].destroy();
    //if(score_4<25){
    //  score_4 = score_4+1;
    //}
    score = score+1;
  }
  if(bowl.isTouching(donutG5)){
    donutG5[0].destroy();
    //if(score_5<25){
    //  score_5 = score_5+1;
    //}
    score = score+1;
  }
  if(bowl.isTouching(germG)){
    if(life >=1){
      germG[0].destroy();
      life = life-1;
    }
    if(life == 0){
      donutG1.setVelocityYEach(0);
      donutG2.setVelocityYEach(0);
      donutG3.setVelocityYEach(0);
      donutG4.setVelocityYEach(0);
      donutG5.setVelocityYEach(0);
      germG.setVelocityYEach(0);
      donutG1.setLifetimeEach(-1);
      donutG2.setLifetimeEach(-1);
      donutG3.setLifetimeEach(-1);
      donutG4.setLifetimeEach(-1);
      donutG5.setLifetimeEach(-1);
      germG.setLifetimeEach(-1);
      gamestate = "end";
    }
     
  }
   
  }
  if(gamestate == "end"){
    //textSize(25);
    fill("red");
    text("Game Over",windowWidth/2-75,windowHeight/2);
  }
  drawSprites();
}
function donut1(){
  donutS1 = createSprite(200,0,20,20);
  donutS1.addImage(donutP1);
  donutS1.scale = 0.2;
  donutS1.x = Math.round(random(50,windowWidth-50));
  donutS1.velocityY = score+12/1.5;
  donutS1.lifetime = 250;
  donutG1.add(donutS1);
}
function donut2(){
  donutS2 = createSprite(200,0,20,20);
  donutS2.addImage(donutP2);
  donutS2.scale = 0.2;
  donutS2.x = Math.round(random(50,windowWidth-50));
  donutS2.velocityY = score+12/1.5;
  donutS2.lifetime = 250;
  donutG2.add(donutS2);
}
function donut3(){
  donutS3 = createSprite(200,0,20,20);
  donutS3.addImage(donutP3);
  donutS3.scale = 0.2;
  donutS3.x = Math.round(random(50,windowWidth-50));
  donutS3.velocityY = score+12/1.5;
  donutS3.lifetime = 250;
  donutG3.add(donutS3);
}
function donut4(){
  donutS4 = createSprite(200,0,20,20);
  donutS4.addImage(donutP4);
  donutS4.scale = 0.2;
  donutS4.x = Math.round(random(50,windowWidth-50));
  donutS4.velocityY = score+12/1.5;
  donutS4.lifetime = 250;
  donutG4.add(donutS4);
}
function donut5(){
  donutS5 = createSprite(200,0,20,20);
  donutS5.addImage(donutP5);
  donutS5.scale = 0.2;
  donutS5.x = Math.round(random(50,windowWidth-50));
  donutS5.velocityY = score+12/1.5;
  donutS5.lifetime = 250;
  donutG5.add(donutS5);
}
function germ1(){
  germS1 = createSprite(200,0,20,20);
  germS1.addImage(germP1);
  germS1.scale = 0.14;
  germS1.x = Math.round(random(50,windowWidth-50));
  germS1.velocityY = score+9/1.5;
  germS1.lifetime = 250;
  germG.add(germS1);
}
function germ2(){
  germS2 = createSprite(200,0,20,20);
  germS2.addImage(germP2);
  germS2.scale = 0.14;
  germS2.x = Math.round(random(50,windowWidth-50));
  germS2.velocityY = score+9/1.5;
  germS2.lifetime = 250;
  germG.add(germS2);
}