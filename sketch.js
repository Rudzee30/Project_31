const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g,g1,g2,g3;
var plinkos=[];
var divs=[];
var part=[];
var divisionHeight=300;
var w=random(220,260);
function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    
    engine = Engine.create();
    world = engine.world;
    
    g= new Ground(240,785,480,30);
    g1= new Ground(5,400,10,800);
    g2= new Ground(240,5,480,10);
    g3= new Ground(475,400,10,800);
    for(var k=20;k<=width;k=k+89){
        divs.push(new Div(k,height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j,75,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j-17,175,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j,375,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j+17,275,10));
    }
    if(frameCount%20===0){
        part.push(new Particle(random(w,10,10)));
    }
    
}

function draw(){
    background(0);

    Engine.update(engine);
    
    g.display();
    g1.display();
    g2.display();
    g3.display();
    for (var k=0;k<divs.length;k++){
        divs[k].display();
    }
    for (var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }
    for (var k=0;k<part.length;k++){
        part[k].display();
    }
}

