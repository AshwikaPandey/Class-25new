
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashpaper,trashcan1, trashcan2,trashcan3
var trashImage,trashcanImage

function preload()
{
trashImage = loadImage("paper.png")
trashcanImage= loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);
       

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
fill(440);
trashpaper = new Trash(100,200,40,40)

trashcan1 = new  Trashcan(480,680,20,120)

	trashcan2 = new Trashcan(680,680,20,120)
 trashcan3= new Trashcan(580,680,180,20)
 
 ground = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  
trashpaper.display();
  ground.display();
  
  trashcan1.display()
 trashcan2.display()
  
  trashcan3.display()
  
  
  
 // keyPressed()

 
 
}

function keyPressed(){
//the trash  has to jump
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(trashpaper.body, trashpaper.body.position, {x:55,y:-65})
  
  }



}

