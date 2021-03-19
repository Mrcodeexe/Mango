
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var sling;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100, 100, 30);
	mango2= new Mango(1100, 200, 30);
	mango3=new Mango(1000, 100, 30)
	mango4= new Mango(1180, 130, 30)
	mango5=new Mango(1000, 180, 30)
;
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	sling=new Sling(boy.body,groundObject.body);
	
	

	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}
