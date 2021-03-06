
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new bobObject(200, 300,150, PI/7);
    bobObject2= new bobObject(210, 300,150, PI/7);
	bobObject3= new bobObject(220, 300,150, PI/7);
	bobObject4= new bobObject(230, 300,150, PI/7);
	bobObject5= new bobObject(240, 300,150, PI/7);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}



