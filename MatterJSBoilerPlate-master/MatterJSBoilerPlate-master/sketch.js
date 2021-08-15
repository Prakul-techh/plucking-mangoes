
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj,stoneOBj,groundObject,launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new stone(235,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1100,230,40);
	mango11=new mango(1200,200,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.Body,{x:235,y:420})
	var render = Render.create({
		elememt:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}
	});


	Engine.run(engine);
  
}


function draw() {

  
  background(230);
  textSize(25);
  textSize("press space to get a second chance to play!!",50,50);
  Image(boy,200,340,200,300)

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
  launcherObject.display();

  detecollision(stoneOBj,mango1);
  detecollision(stoneOBj,mango2);
  detecollision(stoneOBj,mango3);
  detecollision(stoneOBj,mango4);
  detecollision(stoneOBj,mango5);
  detecollision(stoneOBj,mango6);
  detecollision(stoneOBj,mango7);
  detecollision(stoneOBj,mango8);
  detecollision(stoneOBj,mango9);
  detecollision(stoneOBj,mango10);
  detecollision(stoneOBj,mango11);
  detecollision(stoneOBj,mango12);



  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneOBj.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	launcherObject.fly();

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneOBj,{x:235,y:420})
		launcherObject.attach(stoneOBj.body);
	}
}
function detecollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}