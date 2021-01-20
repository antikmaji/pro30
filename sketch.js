const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(2200,400);
    engine = Engine.create();
    world = engine.world;

   
    object1=new Object(890,200,50,50);
    object2=new Object(960,200,50,50);
    object3=new Object(1030,200,50,50);
    object4=new Object(1100,200,70,50);
    object5=new Object(1170,200,50,50);
    object6=new Object(1240,200,50,50);
    object7=new Object(1310,200,50,50);
    object8=new Object(330,235,30,40);
    object9=new Object(360,235,30,40);
    object10=new Object(390,235,30,40);
    object11=new Object(420,235,30,40);
    object12=new Object(450,235,30,40);
    object13=new Object(360,195,30,40);
    object14=new Object(390,195,30,40);
    object15=new Object(420,195,30,40);
    object16=new Object(390,195,30,40);
    polygon=new Polygon(100,200);

    slingshot = new SlingShot(polygon.body,{x:100, y:200})
   
}

function draw(){
    
    background("black");

    Engine.update(engine);

    object1.display();
    object2.display();
    object3.display();
    object4.display();
    object5.display();
    object6.display();
    object7.display();
    object8.display();
    object9.display();
    object10.display();
    object11.display();
    object12.display();
    object13.display();
    object14.display();
    object15.display();
    object16.display();
    polygon.display();
    slingshot.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

if(keyCode===32){
    slingshot.attach(polygon.body);
}

}
