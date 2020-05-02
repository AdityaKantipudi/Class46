var form;
var player;
var gameState = 0;
var Bullets;
var enemyBullets;
var spaceInvadersBackground;
var Spaceship;
var enemySpaceship;
var player;
var bg;
var bullet;
//var bulletGroup = new Group();
//var enemyGroup = new Group();
function preload() {
Bullets = loadImage("Images/Bullets.png");
//enemyBullets = loadImage("Images/Enemy Bullets.png");
spaceInvadersBackground = loadImage("Images/BG Img.jpg");
Spaceship = loadImage("Images/Spaceship.png");
enemySpaceship = loadImage("Images/Enemy Spaceship.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight -100);
  form = new Form();
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
bg.addImage("Background",spaceInvadersBackground)
bg.velocityY = -3;
bg.y = bg.height/2;
}

function draw() {
  background(0,0,0);  
if (bg.y < 0) {
  bg.y = bg.height/5;
}
  drawSprites();
  if (gameState === 0) {
    form.display();

  }
  if (gameState === 1) {
    
    spawnEnemies();
    player();
    if (keyIsDown(32)) {
    bullet = createSprite(player.x,displayHeight - 200,20,40);
      //bulletGroup.add(bullet);  
    
      bullet.addImage("Bullet",Bullets);
      bullet.scale = 0.1;
      bullet.velocityY = -10;
      bullet.lifetime = displayHeight/3;
    }
   player.x = mouseX;
  }



}
function spawnEnemies() {
  if (frameCount%60 === 0) {
    var enemy = createSprite(random(200,displayWidth -200),0,75,75);
    //enemyGroup.add(enemy);
    enemy.lifetime = displayHeight/3;
enemy.velocityY = 3;
enemy.addImage("EnemySpaceship",enemySpaceship);
enemy.scale = 0.4;

  }
}

function player() {
  var player = createSprite(displayWidth/2,displayHeight - 200,100,100);
  player.addImage("Spaceship",Spaceship);
  player.scale = 0.2
}

