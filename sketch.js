const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   bgImg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500,350,200,20);
   ground2 = new Ground(900,200,200,20);
    ground3 = new Ground(600,550,1200,20)
 
    block1 = new Block(440,235,30,40);
    block2 = new Block(470,235,30,40);
    block3 = new Block(500,235,30,40);
    block4 = new Block(530,235,30,40);
    block5 = new Block(560,235,30,40);
    block6 = new Block(470,195,30,40);
    block7 = new Block(500,195,30,40);
    block8 = new Block(530,195,30,40);
    block9 = new Block(500,155,30,40);

    block10 = new Block(830,135,30,40);
    block11 = new Block(860,135,30,40);
    block12 = new Block(890,135,30,40);
    block13 = new Block(920,135,30,40);
    block14 = new Block(950,135,30,40);
    block15 = new Block(860,95,30,40);
    block16 = new Block(890,95,30,40);
    block17 = new Block(920,95,30,40);
    block18 = new Block(890,55,30,40);

    polygon = new Polygon(150,250,5)

   slingshot = new SlingShot(polygon.body,{x:150,y:250});

}
    function draw(){
        background(bgImg);
        Engine.update(engine);
        
        ground1.display();
        ground2.display();
        ground3.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();                   
        block6.display();
        block7.display();
        block8.display();
        block9.display();

        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();                   
        block15.display();
        block16.display();
        block17.display();
        block18.display();

        slingshot.display();
        polygon.display();


    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    
    function mouseReleased(){
        slingshot.fly();
    }


    function keyPressed(){
        if(keyCode === 32){
            slingshot = new SlingShot(polygon.body,{x:150,y:250});
            Matter.Body.setPosition(polygon.body, {x: 150 , y: 250});
            chain.attach(polygon.body);

        }
    }
    
