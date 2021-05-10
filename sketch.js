var land, hero, go;

var landImage, heroImage, herobImage, herob1Image , herob2Image , herob3Image, herob4Image , hefimg , goimg;

var herobGroup , herob1Group , herob2Group ,herob3Group ,herob4Group;

var herofirecharge;
 var Kill = 0;
function preload(){
  //loading image and animation
  landImage=loadImage("l.png");
  heroImage=loadImage("pdf.png");
  herobImage=loadImage("h1.png");
  herob1Image=loadImage("h2.png");
  herob2Image=loadImage("h3.png");
  herob3Image=loadImage("h4.png");
  herob4Image=loadImage("h5.png");
  hefimg=loadImage("hef.png");
  goimg=loadImage("v.jpg");

  //Groups
  herobGroup = new Group();
  herob1Group = new Group();
  herob2Group = new Group();
  herob3Group = new Group();
  herob4Group = new Group();
  hefG = new Group();
  
}
function setup() {
  createCanvas(250,399);
  
  // creating sprites
  land=createSprite(200,200);
  land.addImage("space",landImage);
 
  hero=createSprite(206,326,10,10);
  hero.addImage("herospaceShip",heroImage);
  hero.scale=0.7;
  
  go=createSprite(250,250)
  go.addImage("gameover",goimg);
  go.visible=false;
  
 
}

function draw() {
  background("red"); 
  hero.x = World.mouseX;
    //creating edges
    createEdgeSprites();
    
    //coliding hero with edges
    //hero.collide(edge);
    
    // making hero move
    if(keyDown("right_arrow")) {
    hero.x=hero.x+8;
  }
    if(keyDown("left_arrow")) {
    hero.x=hero.x-8;
  }
    
   if(herobGroup.y > 400|| herob1Group.y > 400||herob2Group.y > 400 || herob3Group.y > 400 || herob4Group.y > 400){
      go.visible=true;
    } 
  
    
  /*  if(keyDown("space")){
      herofirecharge=createSprite(hero.x,hero.y);
      herofirecharge.addImage("fire",hefimg);
      herofirecharge.velocityY=-3;
  }*/
  
    
    
    if(herobGroup.isTouching(hero)){
      herobGroup.destroyEach();
      hero.destroyEach();
     // Text("gameover",200,200,);
    // Kill = Kill+1;
    }
    if(herob1Group.isTouching(herofirecharge)){
      herob1Group.destroyEach();
      herofirecharge.destroyEach();
      Kill = Kill+1;
    }
    if(herob2Group.isTouching(herofirecharge)){
      herob2Group.destroyEach();
      herofirecharge.destroyEach();
      Kill = Kill+1;
    }
    if(herob3Group.isTouching(herofirecharge)){
      herob3Group.destroyEach();
      herofirecharge.destroyEach();
      Kill = Kill+1;
     
    }
    if(herob4Group.isTouching(herofirecharge)){
      herob4Group.destroyEach();
      herofirecharge.destroyEach();
      Kill = Kill+1;
    }
 //   createfire();
    createherob();
  //  createherob1();
   // createherob2();
  //  createherob3() ;
    //createherob4();
    
  drawSprites();
}

/*function createfire() {
  var herofirecharge= createSprite(100, 100, 60, 10);
  herofirecharge.addImage("fire",hefimg);
  //some changes here
  //herofirecharge.y = 300;
  //hero.y =  herofirecharge.y;
  //hero.x =  herofirecharge.x;
  herofirecharge.x=hero.x;
  herofirecharge.velocityY= -4;
  herofirecharge.lifetime = 100;
  herofirecharge.scale = 0.3;
  hefG.add(herofirecharge);
}*/

function createherob() {
  if (World.frameCount % 60 == 0) {
  var herobrien = createSprite(Math.round(random(250,20),40, 10, 10));
  herobrien.addImage("villan",herobImage);
  herobrien.scale=0.80;
  herobrien.velocityY = 5;
  herobrien.lifetime = height+10 ;
  herobGroup.add(herobrien);
  }
}

/*function createherob1() {
  if (World.frameCount % 200 == 0) {
  var herobrien1 = createSprite(Math.round(random(50,10),40, 10, 10));
  herobrien1.addImage("villan2",herob1Image);
  herobrien1.scale=0.12;
  herobrien1.velocityY = 3;
  herobrien1.lifetime = height+10 ;
  herob1Group.add(herobrien1);
  }
}*/

/*function createherob2() {
  
  if (World.frameCount % 200 == 0) {
  var herobrien2 = createSprite(Math.round(random(150,50),40, 10, 10));
  herobrien2.addImage("villan3",herob2Image);
  herobrien2.scale=0.12;
  herobrien2.velocityY = 3;
  herobrien2.lifetime = height+10 ;
  herob2Group.add(herobrien2);
  }
}*/
/*
function createherob3() {
  if (World.frameCount % 200 == 0) {
  var herobrien3= createSprite(Math.round(random(200,50),40, 10, 10));
  herobrien3.addImage("villan4",herob3Image);
  herobrien3.scale=0.12;
  herobrien3.velocityY = 3;
  herobrien3.lifetime = height+10 ;
  herob3Group.add(herobrien3);
  }
}*/
/*
function createherob4() {
  if (World.frameCount % 200 == 0) {
  var herobrien4 = createSprite(Math.round(random(250,50),40, 10, 10));
  herobrien4.addImage("villan5",herob4Image);
  herobrien4.scale=0.12;
  herobrien4.velocityY = 3;
  herobrien4.lifetime = height+10 ;
  herob4Group.add(herobrien4);
  }
}*/