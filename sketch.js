const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofObject;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1,rope2,rope3,rope4,rope5;
var world;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(400,150,230,20);

	ball1 = new Ball(320,430,40)
	ball2 = new Ball(360,430,40)
	ball3 = new Ball(400,430,40)
	ball4 = new Ball(440,430,40)
	ball5 = new Ball(480,430,40)

	rope1=new Rope(ball1.body,roofObject.body,-80, 0)
	rope2=new Rope(ball2.body,roofObject.body,-40, 0)
	rope3=new Rope(ball3.body,roofObject.body,0, 0)
	rope4=new Rope(ball4.body,roofObject.body,40, 0)
	rope5=new Rope(ball5.body,roofObject.body,80, 0)

	Engine.run(engine);

	}

	

function draw() {
	rectMode(CENTER);
  background("#99004d");
 
    roofObject.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
 

  //call display() to show ropes here
  
  
  

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
	
		  }
	}
