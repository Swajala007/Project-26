const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1;
var base2;
var player1,player2;
var canvas,angle,angle1;
//var playerArcher;
var arrows = [];
var obstacles = [];

function preload(){
  backgroundImg = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  
   //Create Player Base and Computer Base Object

  base1 = new Base1(100,300,200,200);
  base2 = new Base2(885,285,200,200);
  player1 = new Player(100,130,100,200);
  player2 = new Player(870,110,100,200);
  angle = -PI/4;
  angle1 = -PI/100;
  playerArcher = new PlayerArcher(80,145,120,120, angle);
  computerArcher = new ComputerArcher(849,55,120,120, angle1);
 
  // arrow2 = new Arrow2(computerArcher.x,computerArcher.y);
   


 }

function draw() {

  background(backgroundImg);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  fill("blue");
textSize(20);
textAlign("center");
text("USE ALL ARROW KEYS",width/2,120);

   //Display Playerbase and computer base 


   for (var i = 0; i < arrows.length; i++) {
    showArrows(arrows[i], i);
  }

  for (var z = 0; z < obstacles.length; z++) {
    showObstacles(obstacles[z], z);
  }


   base1.display();
   base2.display();

   //display Player and computerplayer

   player1.display();
   player2.display();

   playerArcher.display();
   computerArcher.display();


  
   handlePlayerArrowCollision();
   handleComputerArrowCollision();

  // arrow2.display();
   

}


function keyPressed(){
if(keyCode === DOWN_ARROW){
  var arrow = new Arrow(playerArcher.x,playerArcher.y);
  arrows.push(arrow);
}
if(keyCode === LEFT_ARROW){
  var obstacle = new Obstacle(computerArcher.x,computerArcher.y);
  obstacles.push(obstacle);
}
}


function showArrows(arrow,index){
     arrow.display();
     if(arrow.body.position.x >= width || arrow.body.position.y >= height - 50){
       Matter.World.remove(world,arrow.body);
       arrows.splice(index,1)
     }
    }
     function showObstacles(obstacle,index){
     obstacle.display();
     if(obstacle.body.position.x >= width || obstacle.body.position.y >= height - 50){
       Matter.World.remove(world,obstacle.body);
       obstacles.splice(index,1)
     }
    }

function keyReleased(){
  if(keyCode === DOWN_ARROW){
arrows[arrows.length - 1].shoot();
  
  
}

if(keyCode === LEFT_ARROW){
  obstacles[obstacles.length - 1].shoot();
    
    
  }

}

function handlePlayerArrowCollision() {
  // Write code to detect collision between player arrow and opponent
  for(var i = 0; i < arrows.length; i++){
    var base2Collision = Matter.SAT.collides(
     arrows[i].body,
     base2.body
    );
  
    var computerArcherCollision = Matter.SAT.collides(
    arrows[i].body,
    computerArcher.body
    );
  
  
    
    var player2Collision = Matter.SAT.collides(
      arrows[i].body,
      player2.body
      );
  
      if(
        base2Collision.collided ||computerArcherCollision.collided ||player2Collision.collided) {
        console.log("Arrow Collided");
       }
     }


  }

function handleComputerArrowCollision(){

  for(var i = 0; i < obstacles.length; i++){
    var base1Collision = Matter.SAT.collides(
     obstacles[i].body,
     base1.body
    );
  
    var playerrArcherCollision = Matter.SAT.collides(
    obstacles[i].body,
    playerArcher.body
    );
  
  
    
    var player1Collision = Matter.SAT.collides(
      obstacles[i].body,
      player1.body
      );
  
      if(
        base1Collision.collided ||
        playerArcherCollision.collided ||
        player1Collision.collided
        ) {
         console.log("Obstacle Collided");
       }
     }


  }










