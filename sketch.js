
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  
var engine, world;
var  box1, polygon;
var backgroundImg,platform;

function preload()
{
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

 //log6 = new Log(230,180,80, PI/2);
   slingshot = new SlingShot(bird.body,{x:200, y:100});
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }   
    function mouseReleased()
    {
        slingshot.fly();
    }