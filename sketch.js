
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,600,9);

	ground = new Ground(400, 680, 800, 20);
	ground.shapeColor="yellow";

	 
    bottom = new Dustbin(550,670,210,20);
  
 
    side1 = new Dustbin(450,630,20,90);
    
 
    side2 = new Dustbin(650,630,20,90);
    


  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  paper.display();

  ground.display();

  side1.display();
  bottom.display();
  side2.display();

  drawSprites();
 
}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:10, y: -10})
	}
}



