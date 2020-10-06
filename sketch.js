
// global variables
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19,
wall20, wall21, wall22, wall23, wall24, wall25;
var player, player_attack, player_dead;
var end;
var playerHealth = 40;
var monsterHealth = 2;
var monster, monster2, monster3, monster4, monster5, monster6, monster7, monster8;
var wallGroup, monsterGroup;
var gameState = 0;
var backImg;

var resetImg;
var backSound;

function preload(){
  backImg = loadImage("images/Standard Dungeon.jpeg");
  

  wallImg = loadImage("images/WallImg-removebg-preview.png");
  player_walking = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/5.png", "images/6.png");
  player_attack = loadImage("images/4.png");
  player_dead = loadImage("images/dead.png");

  monster_left = loadImage("images/monster1.png");
  monster_right = loadImage("images/monster2.png");
  monster_up = loadImage("images/monster3.png");

  endImg = loadImage("images/mirror2-removebg-preview.png");

  resetImg = loadImage("images/reset-removebg-preview.png");

  backSound = loadSound("Sunken Ship - Super Mario RPG.mp3");
}

function setup(){
createCanvas(1600, 1600);
wallGroup = new Group();
monsterGroup = new Group();
//creating player sprite
player = createSprite(100, 100, 50, 50);
player.addAnimation("walk", player_walking);
player.scale = 2;

end = createSprite(1500, 1500, 100, 100);

//creating the walls
wall1 = new Wall(700, 800, 800, 50);
wall2 = new Wall(100, 800, 200, 50);
wall3 = new Wall(1400, 800, 400, 50);


wall4 = new Wall(700, 950, 750, 50);
wall5 = new Wall(150, 950, 280, 50);
wall6 = new Wall(1350, 950, 412, 50);

wall7 = new Wall(735, 1100, 770, 50);
wall8 = new Wall(177, 1100, 800, 50);
wall9 = new Wall(1400, 1100, 320, 50);

wall10 = new Wall(390, 1250, 1250, 50);
wall11 = new Wall(1400, 1250, 400, 50);

wall12 = new Wall(1200, 1350, 50, 150);
wall13 = new Wall(1200, 1450, 50, 100);

wall14 = new Wall(700, 1400, 900, 50);
wall15 = new Wall(200, 1400, 200, 50);

wall16 = new Wall(700, 1550, 500, 50);
wall17 = new Wall(200, 1550, 500, 50);

wall18 = new Wall(900, 650, 1300, 50);
wall19 = new Wall(150, 650, 500, 50);

wall20 = new Wall(300, 500, 300, 50);
wall21 = new Wall(850, 500, 1000, 50);

wall22 = new Wall(370, 350, 1000, 50);
wall23 = new Wall(1250, 350, 900, 50);

wall24 = new Wall(300, 200, 50, 330);

wall25 = new Wall(800, 200, 1000, 50);

wall26 = new Wall(600, 1200, 50, 50);



player.setCollider("circle", 0, 0, 15);
  
end.addImage(endImg, "end");




}

function draw(){
background(backImg);

camera.position.x = player.x;
camera.position.y = player.y;
camera.zoom = 2;

edges = createEdgeSprites();

edges[0].visible = false;
edges[1].visible = false;
edges[2].visible = false;
edges[3].visible = false;






if(gameState === 0){

  backSound.play();
  //Player behaviours
  if(keyDown("w")){
    player.velocityY=-15;
  }
  if(keyDown("s")){
    player.velocityY=15;
  }
  if(keyDown("a")){
    player.velocityX=-15;
  }
  if(keyDown("d")){
    player.velocityX=15;
  }
  

  if(monsterGroup.isTouching(player)){
    
    playerHealth = playerHealth-4;
  }
  

  if(wallGroup.isTouching(player)){
  
    playerHealth = playerHealth-0.5;
  }

  if(player.isTouching(edges[0]) || player.isTouching(edges[1]) || player.isTouching(edges[2]) || player.isTouching(edges[3])){
  
    playerHealth = playerHealth-0.1;
  }
  
  if(playerHealth <= 0){
    gameState = 1;
  }


  if(player.isTouching(end)){
    gameState = 2;
  }

}
  
  if(gameState === 1){

    player.x=100;
    player.y=100;
    fill("white");
    textSize(17);
    text("Better Luck next Time!", player.x-100, player.y+100);
    text("Press R to restart", player.x-100, player.y+120);
    if(keyDown("r")){
      reset();
    }
    
    
  }
 

  if(gameState === 2){
    player.x = 100;
    player.y = 100;
    fill("white");
    textSize(15);
    text("You Won! Good Job!", player.x-100, player.y+100);
    text("Press R to restart", player.x-100, player.y+120);
    
    if(keyDown("r")){
      reset();
    }
    
   
  }
  
  


//player.debug = true;
//wall7.debug = true;
//console.log(monsterHealth);

player.depth>end.depth;

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();
wall21.display();
wall22.display();
wall23.display();
wall24.display();
wall25.display();
wall26.display();


spawnMonsters();


drawSprites();

fill("white");
textSize(20);
text("Health :"+playerHealth, player.x -20, player.y-100);
}

function spawnMonsters(){
  if(frameCount%100===0){
    var monster = createSprite(800, 800, 50, 50);
    monster.velocityX = -10;
    monster.life=85;
    monster.addImage(monster_left, "monster");
    monster.scale = 3;
    monsterGroup.add(monster);
    
    var monster2 = createSprite(800, 800, 50, 50);
    monster2.velocityX = 10;
    monster2.life=85;
    monster2.addImage(monster_right, "monster");
    monster2.scale = 3;
    monsterGroup.add(monster2)

    var monster3 = createSprite(800, 800, 50, 50);
    monster3.velocityY = -10;
    monster3.life=85;
    monster3.addImage(monster_up, "monster");
    monster3.scale = 3;
    monsterGroup.add(monster3);

    var monster4 = createSprite(800, 800, 50, 50);
    monster4.velocityY = 10;
    monster4.life = 85;
    monster4.addImage(monster_up, "monster");
    monster4.scale = 3;
    monsterGroup.add(monster4);

    var monster5 = createSprite(800, 800, 50, 50);
    monster5.velocityX = -10;
    monster5.velocityY = 10;
    monster5.life = 85;
    monster5.addImage(monster_left, "monster");
    monster5.scale = 3;
    monsterGroup.add(monster5);

    var monster6 = createSprite(800, 800, 50, 50);
    monster6.velocityX = 10;
    monster6.velocityY = 10;
    monster6.life = 85;
    monster6.addImage(monster_right, "monster");
    monster6.scale = 3;
    monsterGroup.add(monster6);

    var monster7 = createSprite(800, 800, 50, 50);
    monster7.velocityX = 10;
    monster7.velocityY = -10;
    monster7.life = 85;
    monster7.addImage(monster_right, "monster");
    monster7.scale = 3;
    monsterGroup.add(monster7);

    var monster8 = createSprite(800, 800, 50, 50);
    monster8.velocityX = -10;
    monster8.velocityY = -10;
    monster8.life = 85;
    monster8.addImage(monster_left, "monster");
    monster8.scale = 3;
    monsterGroup.add(monster8);
   }
   
}

function reset(){
  
  
    gameState = 0;
    playerHealth = 40;
    

  
}

