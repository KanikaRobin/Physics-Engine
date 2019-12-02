const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var object;

function setup() {
  var canvas = createCanvas(400,400);

 engine=Engine.create();
 world=engine.world;

 object=Bodies.rectangle(200,100,50,50);
  World.add(world,object);

  Console.log(object);
  Console.log(object.type);
}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(200,200,50,50);
  
}