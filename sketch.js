const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var bg;
var score=0;
var box1;
var log1;
var backgroundimg;
var constrainedLog;
var Slingshot1;
var string="why is this hapng to my keyboard";
var object="hi";
var num=140;
var bool=true;
var arr1=[1,2,3,4,5];
var arr2=["string",true,123];
var arr3=[[1,2],[3,4],[5,6]];
var gamestate="onsling";
console.log(arr3);
arr3.push("rrrrr");

console.log(arr3);
arr3.pop();
console.log(arr3);bg="sprites/bg.png";
bg="sprites/bg.png";
function preload(){
//backgroundimg=loadImage("sprites/bg.png");


getImage();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    ground1= new ground(600,height,1200,20);
    platform=new ground(150,305,300,170);
    pig1= new pig(810,350);
    log1=new Log(810,260,300,PI/2);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new pig(810,220);
    log2=new Log(810,180,300,PI/2);
box5=new Box(810,160,70,70);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);
bird=new bird(100,100);
//constrainedLog= new Log(230,180,80,PI/2);
Slingshot1=new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    if(backgroundimg)
        background(backgroundimg);
        noStroke();
        textSize(35);
        fill("white");
        text("score"+score,width-300,50);
    
    Engine.update(engine);
    box2.display();
    box1.display();
    ground1.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    platform.display();
//constrainedLog.display();
Slingshot1.display();
console.log(bird.body.speed);



}
function mouseDragged(){
    //if(gamestate!=="launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

    //}


}
function mouseReleased(){
Slingshot1.fly();
gamestate="launched";
}
function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1)
    {
    bird.trajectory=[];
    Matter.Body.setPosition(bird.body,{
        x:250, y:50
    });
Slingshot1.attach(bird.body);


}

}
async function getImage(){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();
var dateTime=responseJSON.datetime; 
var hour=dateTime.slice(11,13);
if(hour>=6&&hour<=17){
bg="sprites/bg2.png";
}
else{
bg="sprites/bg.png";

}
backgroundimg=loadImage(bg);

console.log(backgroundimg);

}