const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo, bola, solo, solo_opcao, bola_opcao;

function setup() {
    createCanvas(400,400);
    mecanismo = Engine.create();
    mundo = mecanismo.world;

    bola_opcao = {
        restitution: 1.0
    }

    bola = Bodies.circle(100,10,20,bola_opcao);
    World.add(mundo, bola);

    solo_opcao = {
        isStatic: true
    }

    solo = Bodies.rectangle(200,390,400,20,solo_opcao);
    World.add(mundo, solo);

}

function draw() 
{
    background(0);
    Engine.update(mecanismo);

    ellipseMode(RADIUS);
    ellipse(bola.position.x, bola.position.y, 30);

    rectMode(CENTER);
    fill("yellow");
    rect(solo.position.x, solo.position.y, 400,20);
  
}

