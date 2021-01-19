const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,300,50,50);
    box2 = new Box(200,100,50,30);
    ground= new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}


/*push() -> captures the new setting.
pop() -> reverts to the old setting.
translate() -> to change the 0 of theaxis to a given x and y position*/