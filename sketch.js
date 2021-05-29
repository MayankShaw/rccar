const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,box,box2,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


  
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(250,160,150);
    box=new Box(350,200,150,150);
    box2=new Box2(500,150,180,100);
}
function draw(){
    background("lightblue");
    Engine.update(engine);
   
rubber.display();
    
    plane.display();
    hammer.display();
box.display();
box2.display();

}


