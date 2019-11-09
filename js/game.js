let ground, box;
let bird1;
let backgroundImg;
let world, engine;

function preload() {
    //backgroundImg = loadImage("../assets/Background.jpg");
}

function setup() {
    createCanvas(600, 400);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 10, width, 20);
    box = new Box(450, 0, 50, 75); 
    bird1 = new Bird(50, 300, 25, 50);    
}

function draw() {
    background(0);
    Matter.Engine.update(engine);
    ground.show();
    box.show();
    bird1.show();
}